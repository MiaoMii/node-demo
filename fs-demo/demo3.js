const fs = require('fs');

const readStream = fs.createReadStream('./input.txt');


let count = 0;
let str = '';
readStream.on('data', (data) => {
    str += data;
    count++;
});


readStream.on('end', () => {
    console.log(str,'-------',count);
});


readStream.on('error', (err) => {
    console.log(err);
})

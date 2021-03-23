const fs = require('fs');

const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./wwwroot/input.txt');


readStream.pipe(writeStream)

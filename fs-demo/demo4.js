const fs = require('fs');
let str = '';
for (let i = 0; i < 1000; i++) {
    str += '杨力是猪\n';
}


const writeStream = fs.createWriteStream('./input.txt');

writeStream.write(str);

writeStream.end();  //有end方法才会进入finish事件

writeStream.on('finish', () => {
    console.log('写入完成');
})

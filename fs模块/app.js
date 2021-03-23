/*
* 1. fs.stat 检测是文件还是目录
* 2. fs.mkdir 创建文件夹
* 3. fs.writeFile 创建写入文件
* 4. fs.appendFile 追加文件
* 5. fs.readFile 读取文件
* 6. fs.readdir 读取目录
* 7. fs.rename 重命名
* 8. fs.rmdir 删除目录
* 9. fs.unlink 删除文件
* */

const fs = require('fs')

// stat
fs.stat('./html', (err,data) => {
    if(err) {
        console.log(err );
        return;
    }
    console.log(`是文件：${data.isFile()}`);
    console.log(`是目录 ：${data.isDirectory()}`);
})


// mkdir
fs.mkdir('./css', (err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('创建成功');
})


/*
* writeFile
* @params
* filename  (String)          文件名
* data      (String | Buffer) 将要写入的内容，可以是字符串或buffer数据
* option    (Object)
*   encoding(String)          默认utf-8 当data为Buffer时应该为
*   mode    (Number)          文件读写权限，默认438
*   flag    (String)          默认值'W'
*   callback(Function)        传递一个异常参数
* */
fs.writeFile('./html/index.html', '你好nodejs', (err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('创建写入成功');
})

// 文件不存在则创建，存在则追加写入
fs.appendFile('.css/base.css', 'body: {color: red}', (err) => {
    if(err) {
        console.log(err);
        return
    }
    console.log('文件追加成功');
})

fs.readFile('./html/index.html', (err, data) => {
    if(err) {
        console.log(err);
        return
    }

    console.log(data);
    //将Buffer转换成字符串类型
    console.log(data.toString());
})


fs.readdir('./html', (err,data) => {
    if(err) {
        console.log(err);
        return
    }

    console.log(data);
})


// rename 1.重命名文件夹 2.移动文件夹
fs.rename('./css/base.css', 'css/index.css', (err) => {
    if(err) {
        console.log(err);
        return
    }
})

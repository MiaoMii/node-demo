// 1. 判断服务器上有没有upload目录，如果没有的话创建，反之不做操作

const fs = require('fs');
const path = './upload';
fs.stat('./upload', (err, data) => {
    if (err) {
        // 创建
        mkdir(path);
        return;
    }
    if (data.isDirectory()) {
        console.log('upload文件夹存在');
    } else {
        // 先删除文件，再创建文件夹
        fs.unlink(path, (err) => {
            if(!err) {
                mkdir(path);
            }else {
                console.log('请检查输入数据');
            }
        })
    }
});

function mkdir(dir) {
    fs.mkdir(dir, (err) => {
        if (err) {
            console.log('创建失败');
        }
    });
}


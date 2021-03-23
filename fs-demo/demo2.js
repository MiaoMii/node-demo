// 判断文件夹下的文件，若是目录则放进数组中

const fs = require('fs');
const path = './wwwroot';

// let catalogArr = [];
/*
fs.readdir(path, (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
    data.map(it => {
        fs.stat(`${path}/${it}`, (er, da) => {
            if(er){
                console.log(er);
                return;
            }
            da.isDirectory() && catalogArr.push(it)
        })
    })
})
console.log(catalogArr);  //空
*/

// 1、定义一个方法判断是否为目录
async function isDir(path) {
    return new Promise((resolve,reject) => {
        fs.stat(path, (err, data) => {
            let isDirFlag = false;
            if (!err) {
                isDirFlag = data.isDirectory();
            }
            resolve(isDirFlag);
        });
    })
}

//2、获取wwwroot下所有资源
function getSource() {
    let catalogArr = []
    fs.readdir(path,  async (err, data) => {
        //1.for 循环
        // for(let i = 0;i < data.length; i++){
        //     if(await isDir(`${path}/${data[i]}`)){
        //         catalogArr.push(data[i])
        //     }
        // }
        // console.log(catalogArr);

        //2.map
        await Promise.all(data.map(async it => {
            if (await isDir(`${path}/${it}`)) {
                catalogArr.push(it)
            }
        }))
        console.log(catalogArr);
    })
}

getSource();

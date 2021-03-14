const http = require('http');
const url = require('url')
const api = 'http://www.baidu.com?name=zhangsn&age=20'
http.createServer((req, res) => {
    console.log(url.parse(api, true))
    let tempQuery = url.parse(api, true).query
    //设置响应头
    res.writeHead(200, {'Content-type': 'text/html;charset="utf-8"'});
    res.write('<head><meta charset="UTF-8"><title></title></head>');
    console.log(tempQuery.age)
    console.log(tempQuery.name)
    res.write('测试nodemon实时刷新');
    res.end() //结束响应,(必写)
}).listen(3000)

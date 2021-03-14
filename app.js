//引入http模块
const http = require('http');

/**
 * req  获取浏览器传来的信息
 * res  给浏览器响应信息
 * */
http.createServer((req, res) => {
    // 设置响应头
    res.writeHead(200, {'Content-type': 'text/plain'});
    // 输出一句话，并结束响应
    res.end('Hello World')
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081');

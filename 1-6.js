var app = require('http');
var fs = require('fs')
var route = app.createServer();
var port = 3000
route.listen(port, ()=>{
    console.log("서버가 시작됨(http://localhost:3000)");
});

route.on('connection',()=>{});

route.on('request', (req, res)=>{
    console.log("요청이 정상적으로 이루어졌습니다.");
    var fileName = "janghohang.jpg"
    var infile = fs.createReadStream(fileName, {flags:'r'});
    infile.pipe(res);
})
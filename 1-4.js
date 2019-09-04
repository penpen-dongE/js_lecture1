//http를 활용하여 request를 하는 방법

var app = require('http');
var route = app.createServer();

route.listen(3000,()=>{
    console.log('3000 포트에서 웹 서버가 시작 되었습니다.');
});

//connection 이벤트를 주면 웹 클라이언트 접속이 됨 
route.on('connection', (socket)=>{
    var addr = socket.address();
    console.log("웹 클라이언트에 접속 하였습니다. %s: %d", addr.address, addr.port);
    console.log(addr);
});

route.on('request', (request, response)=>{
    console.log("웹 클라이언트에서 요청이 왔습니다.");
    console.log(request);
});
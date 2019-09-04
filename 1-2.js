// '라이브러리/파일'을 가져오는 함수
// 자체에 들어있거나 node_modules 안에 있는 라이브러리 또는 메소드를 가져옴

var http = require('http'); 

//서버 만들기
var server = http.createServer();

var port = 3000;
server.listen(port, function(){
    console.log("Server is started : %d" + port)
})



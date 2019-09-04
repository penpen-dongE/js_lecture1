var app = require('http');
var options = {
    host:"www.google.com",
    port: 80,
    path: '/'
};

var req = app.get(options, (res)=>{
    
    var resData = '';
    res.on('data', (chunk)=>{
        resData += chunk
    });
    res.on('end', (chunk)=>{
        console.log(resData)
    });
});

req.on('error',(err)=>{
    console.log("에러발생!"+ err.message)
});


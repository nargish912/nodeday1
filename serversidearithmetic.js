var http=require('http');
var a=200;
var b=30;
var c=a+b;
var msg=`A value is ${a}<br/>B value is ${b}<br/>Sum of a+b is=${c}`;
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':`text/html`});
    res.end(msg);
}).listen(3000);
console.log("server is started...http://127.0.0.1:3000");
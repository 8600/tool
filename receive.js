"use strict";
const http = require("http");

let server = function(request,response){  

    response.writeHead(200,{"Content-Type":"text/json"});
    if(request.method === "GET"){
        response.write("收到GET请求");
        response.end();
    }else{
        let postdata = "";
        request.addListener("data",function(postchunk){
            postdata += postchunk;
        })

        request.addListener("end",function(){
            console.log(`-----------------------${new Date().toLocaleTimeString()}-----------------------`)
            console.log(JSON.parse(postdata).data);
            response.write("收到了Post请求");
            response.end();
        });
    }
};

http.createServer(server).listen(2333);  
console.log("正在监听!");  
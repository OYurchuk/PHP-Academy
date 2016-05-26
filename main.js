var http = require("http");
const fs = require('fs');
var path = require("path");


http.createServer(function (request, response) {
	var a = require('url').parse(request.url,true);
	//var h = require('url').parse(request.rawHeaders,true);
	var p = path.parse(request.url);
	//http.request();
	var b; 
	console.log("-------///-----------==================");
	console.log(p.dir);	
	console.log(p);
	
		console.log("-----========-------///-----*********");
		
		if(/text\/html/.test(request.headers.accept)){
			fs.readFile("ind.html",function(e,d){		
			response.write(d);
			response.end()
		});			
		};
		
		if(p.dir == "/sorce"){
			fs.readFile("sorce/"+p.base,function(e,d){	
				//console.log(e);
				//console.log(d);				
			response.write(d);
			response.end()	
			});
		};
		
		
		if(a.query.ajax){
			if(a.query.time){
				
				setTimeout(function(){
					response.writeHead(200, {'Content-Type': 'text/plain',     'Access-Control-Allow-Origin' : '*',
						'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});
			 //response.write("123123123");
			response.end(a.query.mess)
					
					},a.query.time)
				
				return
			} 
			
			
			response.writeHead(200, {'Content-Type': 'text/plain',    'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});
			 //response.write("123123123");
			response.end(a.query.mess)
		}
	
	
	//if(a.query.a==17)
	//console.log(a);
	//console.log(request.rawHeaders);,"utf-8"

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  // response.writeHead(200, {'Content-Type': 'text/plain'});
 //var b= JSON.stringify(a);
 
   // Send the response body as "Hello World"
   //setTimeout(function(){ response.end('Hello! World\n');},3000)
  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');


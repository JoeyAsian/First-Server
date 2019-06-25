const http = require("http");

const server = http.createServer(function(request, response){
    response.writeHead(200, {"content-type": "text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title> first server</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hellow Vero!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(3000);
console.log('wassup G you server is up my chigga you is Big Chillin now.')
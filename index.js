/**
 * Created by Administrator on 2016/11/23.
 */

var http = require('http')
var fs = require('fs')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){
    if(request.url === '/'){
        response.writeHead(200)
        fs.readFile('index.html', function(error, content){
            htmlString = content.toString()
            response.end(htmlString)
        })
    }else {
        response.writeHead(404)
        response.end()
    }
})

server.listen(port)

console.log('¼àÌý³É¹¦')
/*
    Primary file for the API
*/

// Dependencies

const http = require('http');
const { URL } = require('url');

// The server should respond to all request with a string

const server = http.createServer(function(req, res){
    // get url and parse it
    console.log(req.url);
    const baseURL = 'http://' + req.headers.host + '/';
    const parseUrl = new URL(req.url,baseURL);

    //then get path from url
    const path = parseUrl.pathname;
    const trimmedPath = "tirmmedpath" //path.replace(/^\/+|\?+$/g,'');

    // get the query string as an object
    const queryStringObj = parseUrl.searchParams.entries();

    // log all queries 
    for (const iterator of queryStringObj) {
        console.log(iterator);
    }

    // get http method
    const method = req.method.toLowerCase();

    //then send response
    res.end("Hello World \n");
    //log the request path
    console.log('Request received on path: '+trimmedPath +' request method is: '+method +' querys are: '+ queryStringObj);
});
// Start the server and have it liston port 3000
server.listen(3000, function(){
    console.log("The server is listening on port 3000 now");
})

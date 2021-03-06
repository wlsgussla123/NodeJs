/**
 * Created by Jinhyeon Park on 2017-01-08.
 *
 *  This file is about server.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname; // This code has a controversy because of location. (server or router)
        console.log("Request for " + pathname + " received.");
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// make server.js 's function into module
exports.start = start;

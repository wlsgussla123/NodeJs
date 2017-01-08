/**
 * Created by Jinhyeon Park on 2017-01-08.
 *
 *  This file is about server.
 *  modified contents : content를 server로 보내는 대신 response 객체를 router를 통해 request handler에 injection한다.
 *                      이로 인해, handler는 이 객체가 가진 함수들을 이용해서 스스로 요청에 응답할 수 있다.
 */

var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname; // This code has a controversy because of location. (server or router)
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response); // router() 함수가 값을 return 하기를 기다리는 대신 세 번째 파라미터로 response 객체 전달
                                           // 또한, response의 메소드 호출을 모두 제거, route에서 처리하도록.
        /*
        response.writeHead(200, {"Content-Type": "text/plain"});
        var content = route(handle, pathname);
        response.write(content);
        response.end();
        */
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

// make server.js 's function into module
exports.start = start;

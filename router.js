/**
 * Created by Jinhyeon Park on 2017-01-08.
 *
 *  This file is that chooses which code is suitable
 *  modified contents : request handler 가 return 하도록 하는 대신 response 객체를 전달
 */

function route(handle, pathname, response) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname](response);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type" : "text/plain"});
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;
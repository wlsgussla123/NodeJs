/**
 * Created by Jinhyeon Park on 2017-01-08.
 *
 *  This file is that chooses which code is suitable
 */

function route(handle, pathname) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;
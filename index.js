/**
 * Created by Jinhyeon Park on 2017-01-08.
 *
 *  This file is that load files and modules and start application
 */

// get about modules
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandler");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle); // inject router function to server

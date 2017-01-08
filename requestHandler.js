/**
 * Created by Jinhyeon Park on 2017-01-08.
 *
 * This file is really things that what to do when we requested.
 */

function start() {
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;


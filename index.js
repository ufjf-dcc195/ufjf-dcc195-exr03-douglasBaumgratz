var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handlers = {};
handlers["/"] = requestHandlers.intervalo;
handlers["/intervalo.html"] = requestHandlers.intervalo;

server.start(router.route, handlers);

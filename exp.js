var http = require('http');

http.createServer(function (req, res) {
	if (req.url == '/') { 
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('<a href="/hello">Say hello</a>');
	} 
	else if (req.url == '/hello') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Coucou gamin.');
	} 
	else {
		res.writeHead(404);
		res.end();
	}
}).listen(8080, undefined);

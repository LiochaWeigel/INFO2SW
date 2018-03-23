var http = require(’http’);
http.createServer(function (req, res) {
if (req.url == ’/’) { //ici, on manipule l’objet requ^ete
// Home
res.writeHead(200, {’Content-Type’: ’text/html’});
res.end(’<a href="/hello">Say hello</a>’);
} else if (req.url == ’/hello’) {
// Coucou gamin
res.writeHead(200, {’Content-Type’: ’text/html’});
res.end(’Coucou gamin.’);
} else {
// Autres: 404
res.writeHead(404);
res.end();
}
}).listen(8080, undefined);

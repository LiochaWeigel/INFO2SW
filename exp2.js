var express = require(’express’);
var app = express();
app.get(’/’, function(req, res) {
res.setHeader(’Content-Type’, ’text/plain’);
res.end(’Vous ^etes `a l\’accueil, que puis-je pour vous ?’);
});
app.get(’/livres’, function(req, res) {
res.setHeader(’Content-Type’, ’text/plain’);
res.end(’Vous ^etes dans la page des livres’);
});
app.get(’/livre/1’, function(req, res) {
res.setHeader(’Content-Type’, ’text/plain’);
res.end(’Vous ^etes dans la page du livre 1’);
});
app.get(’/ab?cd’, function(req, res) {//Ce chemin de routage fait correspondre acd et abcd.
res.send(’ab?cd’);
});
app.get(’/ab+cd’, function(req, res) {//Ce chemin de routage fait correspondre abcd, abbcd, abbbcd, etc.
res.send(’ab+cd’);
});
app.get(’/ab*cd’, function(req, res) {//Ce chemin de routage fait correspondre abcd, abxcd, abRABDOMcd,...
res.send(’ab*cd’);
});
app.get(’/ab(cd)?e’, function(req, res) {//Ce chemin de routage fait correspondre /abe et /abcde.
2
res.send(’ab(cd)?e’);
});
app.listen(8080);

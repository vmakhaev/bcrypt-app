var http = require('http');
var bcrypt = require('bcrypt');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    bcrypt.hash('asdf', 10, function(err, hash) {
      res.end(err + '\n' + hash);
    });
});

server.listen(3000);

console.log('Server running on port 3000');

var http = require('http');

var s = http.createServer(function(req, res) {
  console.log('Someone connected');
  res.writeHead(200);
  res.write('Sending something from the server. (1) The client should receive this.');
  res.write('Sending something from the server. (2) The client should receive this.');
  req.on('data', function(d) {
    console.log('received::'+d);
  });
  req.on('end', function() {
    console.log('finished receiving.')
  });
  req.on('close', function() {
    console.log('The tunnel closed');
    res.end();
  });
});

s.listen(3001);

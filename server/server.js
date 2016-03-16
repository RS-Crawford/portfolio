var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(express.static(__dirname + '/..'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.get('*', function(req, res) {

  var options = {
    root: __dirname + '/..',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name || 'index.html';

  res.sendFile(fileName, options, function (err) {
    if ( err ) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: ', fileName);
    }
  });

});

var appPort = 8080;

app.listen(appPort);
console.log('App listening on port ' + appPort);

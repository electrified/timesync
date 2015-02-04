var express = require('express');
var bodyParser = require('body-parser');

var PORT = 8081;

var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use('/', express.static(__dirname));
app.use('/timesync/', express.static(__dirname + '/../../dist'));

app.post('/ping', function (req, res) {
  var data = {
    id: (req.body && 'id' in req.body) ? req.body.id : null,
    result: Date.now()
  };
  res.json(data);
});

app.listen(PORT);
console.log('Server listening on port ' + PORT);

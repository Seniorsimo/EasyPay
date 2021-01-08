var express = require("express");
var app = express();

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.listen(8082, () => {
 console.log("Server running on port 8082");
});

require('./api/login')(app);
require('./api/cliente')(app);
require('./api/movimento')(app);

app.get("/", (req, res, next) => {
  res.json('Server mock in funzione',)
});

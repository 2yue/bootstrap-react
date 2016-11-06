//Server side code to start here
//expressjs

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//render the app server side
app.use('/', require('./render/render'));

if (require.main === module) {
    console.log('App started goto - http://0.0.0.0:' + port);
    app.listen(port);
}

module.exports = app;

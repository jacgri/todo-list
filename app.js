var express = require('express')
var app = express ()

require('./controllers/toDoController.js')(app)

app.listen(3000)
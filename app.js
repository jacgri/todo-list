var path = require('path')

require('dotenv').config({
    path: path.join(__dirname, 'settings.env')
})


var mongoose = require('mongoose')
console.log (process.env)
mongoose.connect(process.env.DATABASE_URL, {
    useMongoClient: true
})

var express = require('express')

var app = express ()
var exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
}))
app.set('view engine', '.hbs')

app.use(express.static('public'))

require('./controllers/toDoController.js')(app)

app.listen(3000)
var toDos = require('../models/ToDos.js')

function toDoController (app) {
app.get('/', function (req, res){
    res.render('home', {
        toDos: toDos.getItems()
    })
})
}

module.exports = toDoController
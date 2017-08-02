var bodyParser = require('body-parser')

var toDos = require('../models/ToDos.js')

var urlencodedParser = bodyParser.urlencoded({extended: false})

function toDoController (app) {
    app.get('/', function (req, res){
        toDo.find({}, function (error, results) {
            if (error) {
                throw new Error(error)
            }
                res.render('home', {
                toDos: results
            })
        })
    })
    app.post('/', urlencodedParser, function(req, res){
        toDos.addItem(req.body.item)

        res.render('home', {
            toDos: toDos.getItems()
        })
    })

    app.delete('/', urlencodedParser, function (req, res){
        toDos.removeItem(req.body.id)

        res.render('home', {
            toDos: toDos.getItems()
        })
    })

}

module.exports = toDoController
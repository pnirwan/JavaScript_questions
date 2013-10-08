var express = require('express')
var path = require('path');
var app = express();
// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname + '/public')));
});

app.get('/Question.No.12', function(req, res){
    res.render('Question.No.12.jade')
});
app.get('/Question.No.14', function(req, res){
    res.render('Question.No.14.jade')
});
app.get('/Question.No.16', function(req, res){
    res.render('Question.No.16.jade')
});
app.get('/Question.No.19', function(req, res){
    res.render('Question.No.19.jade')
});
app.get('/Question.No.20', function(req, res){
    res.render('Question.No.20.jade')
})


    .listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');




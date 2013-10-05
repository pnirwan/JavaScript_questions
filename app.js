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

app.get('/', function(req, res){
    res.render('script.jade')
})



    .listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');




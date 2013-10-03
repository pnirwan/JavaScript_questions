var express = require('express')


var app = express();

var app = express();
// Configuration
app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

   app.get('/', function(req, res){
       res.render('home');})



    .listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');




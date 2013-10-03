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

app.get('/Question.No.12', function(req, res){

    var a = [];
    var tri = 0;
    var i, j, k, c = 0;


// for calculating triangular numbers
    for (i = 1; 1; i++) {
        for (j = 1; j <= i; j++) {

            tri = tri + j;
        }

//calculating factors
        a = [];
        for (k = 1; k <= tri; k++) {
            if (tri % k == 0) {

                a.push(k);
            }

        }


        if (a.length > 5) {
            res.end('The first triangular number that have over 5 divisors is ' + tri);
            break;

        }
        tri = 0;
    }




} )

    .listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');



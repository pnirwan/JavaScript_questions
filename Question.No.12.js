var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/Question.No.12") {
    res.writeHead(200, {'Content-Type': 'text/plain'});

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
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');
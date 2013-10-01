var http = require('http');
http.createServer(function (req, res) {

    if (req.url == "/Question.No.16") {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    n = 15;
    var product = 2;
    sum = 0;

//calculating

    for (i = 1; i < n; i++) {
        product = product * 2
    }
//converting factorial into string

    var b = product.toString();

//sum of the digits of the factorial

    for (j = 0; j < b.length; j++) {
        if (b[j] == 'e')break;
        if (b[j] == '.')continue;
        sum = sum + parseInt(b[j]);
    }
    console.log('The sum of the digits of 2^15 is ' + sum);
    }
}).listen(1337, "localhost");
console.log('Server running at http://localhost:1337/');





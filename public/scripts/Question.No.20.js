   var n = 10;
    var product = n;
    sum = 0;

//calculating factorial

    for (i = n - 1; i > 1; i--) {
        product = product * i;
    }

//converting factorial into string

    var b = product.toString();

//sum of the digits of the factorial

    for (j = 0; j < b.length; j++) {
        if (b[j] == 'e')break;
        if (b[j] == '.')continue;
        sum = sum + parseInt(b[j]);
    }
    alert('Question_No.20 \n\n Factorial of ' + n + ' is ' + product + ' and the sum of the digits of the product is ' + sum);

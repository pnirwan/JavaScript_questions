function power_digit_sum() {
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
    alert('Question_No.16 \n\n The sum of the digits of 2^15 is ' + sum);

}




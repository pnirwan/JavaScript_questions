function triangular() {
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
            alert('Question_No.12 \n\n The first triangular number that have over 5 divisors is ' + tri);
            break;

        }
        tri = 0;
    }
}

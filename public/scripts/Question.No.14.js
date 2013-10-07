
    number = 13;
    var seqLength = 0;
    var startingNumber = 0;
    var num = 0, i = 0, k = 0;


    var a = []
//Initialise array a[]
    for (i = 0; i < a.Length; i++) {
        a[i] = -1;
    }
    a[1] = 1;

    for (i = 2; i <= number; i++) {
        num = i;
        k = 0;
        while (num != 1 && num >= i) {
            k++;
            //if the num is even
            if ((num % 2) == 0) {
                num = num / 2;
                //if num is odd
            } else {
                num = num * 3 + 1;
            }
        }
        //Store result in array a[]
        a[i] = k + a[num];

        //Check if num is the best solution
        if (a[i] > seqLength) {
            seqLength = a[i];
            startingNumber = i;
        }
    }
    alert('Question_No.14 \n\n The terms in the sequence starting with ' + number + ' are ' + num);



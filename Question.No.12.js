/**
 * Created with JetBrains WebStorm.
 * User: sonal
 * Date: 9/30/13
 * Time: 9:52 PM
 * To change this template use File | Settings | File Templates.
 */

var a = [];
var tri=0;
var i,j,k,c=0;


// for calculating triangular numbers
for(i=1; i<=7; i++)
{
    for(j=1;j<=i;j++){

        tri=tri+j;
    }
    console.log("The triangular number = " + tri);

//calculating factors

    for(k=1;k<=tri;k++)
    {if(tri%k==0)

        console.log(k);
        a.push(k);

    }



    if (a.length>5){
        console.log(tri);
        break;

    }
    tri=0;
}
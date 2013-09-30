var n = 15;
var product = 2;
sum = 0;

for (i = 1; i <n; i++)
{
    product = product * 2
}
console.log(product)
var b=product.toString();

for(j = 0; j < b.length; j++)
{
    if(b[j]=='e')break;
    if(b[j]=='.')continue;
    sum = sum + parseInt(b[j]);
}
console.log(sum)/**

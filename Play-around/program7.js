function reverse(p)
{
    let rev=0;
    let remainder="";
    while (p != 0) 
    {
        remainder = p % 10;
        rev = rev * 10 + remainder;
        p=parseInt(p/10);
    }
    console.log(rev)
}
reverse(54619)
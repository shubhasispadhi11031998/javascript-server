function leapyr(yr)
{
    if(yr % 400== 0)
    {
        console.log("leap year");
    }
    else if(yr % 100==0)
    {
        console.log("not a leap year");
    }
    else if(yr % 4==0)
    {
        console.log("leap yr")
    }
    else
    {
        console.log("not a leap yr");
    }
}
leapyr(2016)
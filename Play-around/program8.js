function lcm(n1,n2)
{
let mm=0;
if(n1>n2)
{
mm=n1;
}
else if(n1<n2)
{
mm=n2;
}
else
{
mm=n1;
}
do
{
if(mm%n1==0 && mm%n2==0)
{
console.log("LCM = ",mm);
break;
}
else
{
mm++;
}
}
while(true);
}
lcm(18,12);
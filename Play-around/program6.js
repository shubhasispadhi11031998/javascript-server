function gcd(z1,z2)
{
        while(z1!=z2)
        {
            if(z1 > z2)
            {
                z1 -= z2;
            }
            else
            {
                z2 -= z1;
            }
        }
        console.log(z1);
}
gcd(12,14)
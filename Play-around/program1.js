function star(n,m)
{
    let s="",ss="";
    for(let i=1;i<=n;i++)
    {
        for(j=1;j<=m;j++)
        {
            ss+="@";
        }
        console.log(ss);
        s="";
        ss="";
    }
}
star(5,5);
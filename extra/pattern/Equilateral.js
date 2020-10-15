function equilateral(n) 
{ 
  let s1="",s2="";
    for (let i = 0; i < n; i++) 
    {
      for (let j = 0; j <= n-i; j++) 
      {
        s1+=" ";         
      }
      for (let k = 0; k <= i; k++) 
      { 
          s2+="* ";
      }
      console.log(s1,s2);
      s1="";
      s2=""
    } 
  } 
  equilateral(10)

  
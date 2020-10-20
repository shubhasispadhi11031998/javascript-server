function armstrong(num)
{
    let orgnum=num;
    let r="";
    let rr="";
    while(orgnum!=0){
        r=orgnum % 10;
        rr+=r*r*r;
        orgnum /=10;

    }
    if(r=num){
        console.log("armstrong_number");
    }
    else{
        console.log("not armstrong number");
    }
}
armstrong(371)
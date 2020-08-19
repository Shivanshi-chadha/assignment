const dividesEvenly=(a,b)=>
{
    if(a>b && a%b==0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));
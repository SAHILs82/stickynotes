var a1=["1","2","3","4","5","1","6","7","8","9"]
for(var i=0;i<length;i++)
{
    for(var j=i+1;j<lenght;j++)
    {
        if(i=j)
        {
            console.log(`duplicate value found`+ j)
        }
        else{
            console.log(j)
        }
    } 
}
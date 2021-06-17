var a1=[1,2,3,4,1,2]
for(var i=0;i<a1.length;i++)
{
    for(var j=i+1;j<a1.length;j++)
    {
      if(a1[i]==a1[j])
      {
          console.log(`duplicate value found at position ` + j )
      }  
    }
}
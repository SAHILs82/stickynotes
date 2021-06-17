 const arr = [1,100,400,40,688];

 var max=arr[0];
 var min= arr[0];
 for(let i = 1 ;i<arr.length; i++)
 {
     if(arr[i]>max)
     {
         max=arr[i];
     }
     else  if (arr[i]<min)
     {
         min=arr[i];
     }
 }
 console.log("The largest value is: "+max);
 console.log("The smallest value is: "+min);
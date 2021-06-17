var arr = [1, 2, 3, 4, 5, 6]

 var sum = arr.reduce(fun);
 console.log(sum)

function fun(total, val) {
    return total + val;
 }

// function 1 iife
(function add(first,second){
    var answer=first+second;
    console.log(answer + `function 1`)
})(12,12)

//function 2 normal
function sub(one,two){
    var res=one-two
    console.log(res + `fuction 2`)
}
sub(50,30)

//function 3 with return

function mult(o,t){
    var result=o*t
    return result
}
var functionreturns= mult(2,2)
console.log(functionreturns)

//function 4

function values(n1,n2){
        console.log(n1+n2);
     }
     var answer=values(5,1);

//function 5 anonymous

(function(){
    var a=10
    var b=20
    var answer=a+b
    console.log(answer)
})()


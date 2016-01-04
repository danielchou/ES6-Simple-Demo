/*解構*/
var [first, second, third] = someArray;



var [foo, [[bar], baz]] = [1, [[2], 3]]; 
console.log(foo); 
// 1 
console.log(bar); 
// 2 
console.log(baz); 
// 3


/*可放空...*/
var [,,me]=["foo","boo","zoo"];
console.log(me);
   
/* 可用不定參數  */  
var [head, ...tail]=[1,2,3,5];
console.log(tail);

console.log([][0]);

var [missing]=[];
console.log(missing);

function* fibs() { 
    var a = 0; var b = 1; 
    while (true) { yield a; [a, b] = [b, a + b]; 
        console.log(a, b, a+b);
    } 
 } 
 var [first, second, third, fourth, fifth, sixth, seven] = fibs(); 
 console.log(seven);
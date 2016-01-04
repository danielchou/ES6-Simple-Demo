/*解構*/
var [first, second, third] = someArray;



var [foo, [[bar], baz]] = [1, [[2], 3]]; 
console.log(foo); 
// 1 
console.log(bar); 
// 2 
console.log(baz); 
// 3

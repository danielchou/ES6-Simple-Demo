/*解構*/
//var [first, second, third] = someArray;



var [foo, [[bar], baz]] = [1, [[2], 3]]; 
console.log(foo); // 1 
console.log(bar); // 2 
console.log(baz); // 3


/*可放空...*/
var [,,me]=["foo","boo","zoo"]; 
console.log(me);
   
/* 可用不定參數  */  
var [head, ...tail]=[1,2,3,5];
console.log(tail);

console.log([][0]);

var [missing]=[]; 
console.log(missing);

/* 
function* fibs() { 
    var a = 0; var b = 1; 
    while (true) { yield a; [a, b] = [b, a + b]; 
        console.log(a, b, a+b);
    } 
 } 
 var [first, second, third, fourth, fifth, sixth, seven] = fibs(); 
 console.log(seven);
 */


//透過解構，可以把屬性傳道變數當中。
var robotA={name:"Bender"};
var robotB={name:"Flexo"};
var {name: nameA}=robotA;
var {name: nameB}=robotB;
console.log(`A:${nameA}, B:${nameB}`);

//當變數與屬性一致的時候....
var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);// "lorem"
console.log(bar);// "ipsum"

//你也可以套用在物件上
var complicatedObj = {
    arrayProp: [ "Zapp", { second: "Brannigan" } ]
};
var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first);// "Zapp"
console.log(second);// "Brannigan"

//*當解構未定義
var {missing}={};
console.log(missing);  //undefined

/* 觀念分析
({safe} = {});   //但是用小括號卻沒有任何問題。
var {blowup}=null; //TypeError: null has no properties.
var {blowup} =undefined; //也同樣不是屬性。
var {wtf} = NaN; //undefined.
*/

//用函數對應的時候，被解構的值一定要有一個迭代器。

 //***解構的預設值?!
 var [missing=true]=[];
 var {message: msg="這是我的解構預設值"}={};
 var {x=3}={};
 console.log(missing, msg, x);
 
 
 //***解構實際應用在哪?
 
 //1.可與ES6 for-of 合併使用
 var map=new Map();
 map.set(window, "the global");
 map.set(document, "the document");
 //你可以只根據key or value去找值。很有彈性!
 for (var [key,value] of map){
     console.log(key+" is "+ value);
 }
 
 //2.多個return Value的設計

/* case1,2比Case3好太多了!! */
//case1: return array.
function returnMultipleValues() {
    return [1, 2];
}
var [foo, bar] = returnMultipleValues();

//case2: return object. 
function returnMultipleValues() {
    return { foo: 1, bar: 2 };
}
var { foo, bar } = returnMultipleValues();

//case3: 
function returnMultipleValues() {
    return { foo: 1, bar: 2 };
}
var temp = returnMultipleValues();
var foo = temp.foo;
var bar = temp.bar;

//3.ES6 Module的設計(模塊) - 顯示定義模塊，不會汙染你的命名空間。
const { SourceMapConsumer, SourceNode } = require("source-map");


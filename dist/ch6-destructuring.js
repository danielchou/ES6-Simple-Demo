"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

/*解構*/
//var [first, second, third] = someArray;

var foo = 1;
var bar = 2;
var baz = 3;

console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

/*可放空...*/
var _ref = ["foo", "boo", "zoo"];
var me = _ref[2];

console.log(me);

/* 可用不定參數  */
var head = 1;
var tail = [2, 3, 5];

console.log(tail);

console.log([][0]);

var _ref2 = [];
var missing = _ref2[0];

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
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };
var nameA = robotA.name;
var nameB = robotB.name;

console.log("A:" + nameA + ", B:" + nameB);

//當變數與屬性一致的時候....
var _foo$bar = { foo: "lorem", bar: "ipsum" };
var foo = _foo$bar.foo;
var bar = _foo$bar.bar;

console.log(foo); // "lorem"
console.log(bar); // "ipsum"

//你也可以套用在物件上
var complicatedObj = {
    arrayProp: ["Zapp", { second: "Brannigan" }]
};

var _complicatedObj$array = _slicedToArray(complicatedObj.arrayProp, 2);

var first = _complicatedObj$array[0];
var second = _complicatedObj$array[1].second;

console.log(first); // "Zapp"
console.log(second); // "Brannigan"

//*當解構未定義
var _ref3 = {};
var missing = _ref3.missing;

console.log(missing); //undefined

/* 觀念分析
({safe} = {});   //但是用小括號卻沒有任何問題。
var {blowup}=null; //TypeError: null has no properties.
var {blowup} =undefined; //也同樣不是屬性。
var {wtf} = NaN; //undefined.
*/

//用函數對應的時候，被解構的值一定要有一個迭代器。

//***解構的預設值?!
var _ref4 = [];
var _ref4$ = _ref4[0];
var missing = _ref4$ === undefined ? true : _ref4$;
var _ref5 = {};
var _ref5$message = _ref5.message;
var msg = _ref5$message === undefined ? "這是我的解構預設值" : _ref5$message;
var _ref6 = {};
var _ref6$x = _ref6.x;
var x = _ref6$x === undefined ? 3 : _ref6$x;

console.log(missing, msg, x);

//***解構實際應用在哪?

//1.可與ES6 for-of 合併使用
var map = new Map();
map.set(window, "the global");
map.set(document, "the document");
//你可以只根據key or value去找值。很有彈性!
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        console.log(key + " is " + value);
    }

    //2.多個return Value的設計

    /* case1,2比Case3好太多了!! */
    //case1: return array.
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function returnMultipleValues() {
    return [1, 2];
}

var _returnMultipleValues = returnMultipleValues();

var _returnMultipleValues2 = _slicedToArray(_returnMultipleValues, 2);

var foo = _returnMultipleValues2[0];
var bar = _returnMultipleValues2[1];

//case2: return object.

function returnMultipleValues() {
    return { foo: 1, bar: 2 };
}

var _returnMultipleValues3 = returnMultipleValues();

var foo = _returnMultipleValues3.foo;
var bar = _returnMultipleValues3.bar;

//case3:
function returnMultipleValues() {
    return { foo: 1, bar: 2 };
}
var temp = returnMultipleValues();
var foo = temp.foo;
var bar = temp.bar;

//3.ES6 Module的設計(模塊) - 顯示定義模塊，不會汙染你的命名空間。

var _require = require("source-map");

var SourceMapConsumer = _require.SourceMapConsumer;
var SourceNode = _require.SourceNode;
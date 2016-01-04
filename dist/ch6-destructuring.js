"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

/*解構*/
var _someArray = someArray;

var _someArray2 = _slicedToArray(_someArray, 3);

var first = _someArray2[0];
var second = _someArray2[1];
var third = _someArray2[2];
var foo = 1;
var bar = 2;
var baz = 3;

console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3
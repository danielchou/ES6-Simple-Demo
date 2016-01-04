"use strict";

import _regeneratorRuntime from "babel-runtime/regenerator";
import _isIterable from "babel-runtime/core-js/is-iterable";
import _getIterator from "babel-runtime/core-js/get-iterator";
var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
        var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;_e = err;
        } finally {
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }return _arr;
    }return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else if (_isIterable(Object(arr))) {
            return sliceIterator(arr, i);
        } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
    };
})();

var _marked = [fibs].map(_regeneratorRuntime.mark);

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

function fibs() {
    var a, b, _ref3;

    return _regeneratorRuntime.wrap(function fibs$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                a = 0;
                b = 1;

            case 2:
                if (!true) {
                    _context.next = 11;
                    break;
                }

                _context.next = 5;
                return a;

            case 5:
                _ref3 = [b, a + b];
                a = _ref3[0];
                b = _ref3[1];

                console.log(a, b, a + b);
                _context.next = 2;
                break;

            case 11:
            case "end":
                return _context.stop();
        }
    }, _marked[0], this);
}

var _fibs = fibs();

var _fibs2 = _slicedToArray(_fibs, 7);

var first = _fibs2[0];
var second = _fibs2[1];
var third = _fibs2[2];
var fourth = _fibs2[3];
var fifth = _fibs2[4];
var sixth = _fibs2[5];
var seven = _fibs2[6];

console.log(seven);
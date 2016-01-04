
var count=[1,2,3,4,5];

count.forEach(function(v){
	//console.log(v+100);
});

var fruits=["apple","bannan","cccc","dddd","apple"];

for(var i in fruits){
  //console.log(fruit[i] ,i);
}

//for-of 
for(var i of fruits){
  //console.log(i);
}

for(var chr in ""){
	alert(chr);
}

//Set可自動排除重複資料
var unique =new Set(fruits);
for (var f of unique){
	//console.log(f);
}

//iterate一個物件的屬性
var members =[
	{name:"daniel",age:41},
	{name:"anny",age:38},
	{name:"Peter",age:44},
	{name:"Ling",age:46},
];

for (var k of members.keys("name")){
	//console.log(k, name[k]);  //??

}


	/*class RangeIterator {
	 constructor(start, stop) {
		 this.value = start;
		 this.stop = stop;
	 }

	 [Symbol.iterator]() { return this; }

	 next() {
		 var value = this.value;
		 if (value < this.stop) {
		 	this.value++;
		 	return {done: false, value: value};
		 } else {
		 	return {done: true, value: undefined};
		 }
	 }
	}

function range(start, stop) {
	return new RangeIterator(start, stop);
}*/

// 返回一个新的迭代器,可以从 start 到 stop 计数。

for (var v of range2(0,3)){
	console.log("Ding! #", v);
}

function* range2(start, stop) {
	for (var i = start; i < stop; i++)
	yield i;
}

function splitIntoRows(icons, rowLength) {
	var rows = [];
	for (var i = 0; i < icons.length; i += rowLength) {
	rows.push(icons.slice(i, i + rowLength));
	}
	return rows;
}

var w=new splitIntoRows(fruits,3);

console.log(w);

//客制化過濾器
function* filter(test, iterable){
    for(var item of iterable){
        if(test(item)){
            yield item;

        }
    }
}


//同步函數
function makeNoise(){
    shake();
    rattle();
    roll();
}

    //非同步函數
    function makeNoise_Async(){
        return Q.async(function* (){
            yield shack_async();
            yield rattle_async();
            yield roll_async();
        });
        }


var x="daniel", y=123;
        console.log(`This is ${x} and age is ${y}`);
        
/**不定參數**/

function containsAll22(haystack) { 
    for (var i = 1; i < arguments.length; i++) { 
        var needle = arguments[i]; 
        return (haystack.indexOf(needle) === -1); 
    }
}

//不定參數...空的永遠不會是undefined,就只會是個[]空陣列。
function containsAll(haystack, ...needles){
    console.log("needles is :",needles);
    for(var needle of needles){
        console.log("inside", needle);
        if(haystack.indexOf(needle)===-1){    
            return false;
        }
        return true;
    }
}
console.log(containsAll("banana","b","nan"));
console.log(containsAll("banana"));


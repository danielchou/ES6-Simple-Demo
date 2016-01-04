//******
// ES5 
var selected = allJobs.filter(function (job) {
    return job.isSelected();
});
// ES6 lambda
//只有一個參數的時候可以這樣使用!
var selected = allJobs.filter(job => job.isSelected());

//******
// ES5：多個參數怎半? 
var total = values.reduce(function (a, b) {
    return a + b;
}, 0);

// ES6 :就用小括號包起來，程式碼就變得很漂亮!
var total = values.reduce((a, b) => a + b, 0);


//******
// ES5：如果不是函數化怎半?
$("#confetti-btn").click(function (event) {
    playTrumpet();
    fireConfettiCannon();
});

//ES6，太漂亮了!
$("#confetti-btn").click(event => {
    playTrumpet();
    fireConfettiCannon();
});

//var chewToys = puppies.map(puppy => {}); // 这样写会报 Bug！
var chewToys = puppies.map(puppy => ({})); // 这样写会报 Bug！

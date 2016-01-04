"use strict";

/***默認參數***/

function animalSentence() {
    var animals2 = arguments.length <= 0 || arguments[0] === undefined ? "tigers" : arguments[0];
    var animals3 = arguments.length <= 1 || arguments[1] === undefined ? "bears" : arguments[1];
    var animals4 = arguments.length <= 2 || arguments[2] === undefined ? animals3 == "bears" ? " sealions" : "bears" : arguments[2];

    return "Lions and " + animals2 + " and " + animals3 + " and " + animals4 + " Oh my!";
}

console.log(animalSentence());
console.log(animalSentence("elephant"));
console.log(animalSentence("peopel", "bears"));
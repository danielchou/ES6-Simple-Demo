/***默認參數***/

function animalSentence(animals2="tigers", animals3="bears"
    , animals4=(animals3=="bears")?" sealions":"bears"
) {
    return `Lions and ${animals2} and ${animals3} and ${animals4} Oh my!`; 
}

console.log(animalSentence());
console.log(animalSentence("elephant"));
console.log(animalSentence("peopel","bears")); 
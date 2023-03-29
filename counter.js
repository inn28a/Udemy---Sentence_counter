let textarea = document.getElementsByTagName("textarea")[0];

textarea.addEventListener("input", onChange);

function onChange(){
const data = textarea.value;
// number of characters
const numberCharacters = data.length;
//number of words- split funct gives number of words but in case of using space 
const numberWords = data.split(" ").length - 1 ;
//number of sentences
const numberSentences = data.split(".").length - 1;
//display number of characters 
document.getElementById("numChar").innerHTML = numberCharacters;
//display number of words 
document.getElementById("numWords").innerHTML = numberWords;
//display number of sentences 
document.getElementById("numSentence").innerHTML = numberSentences;
}
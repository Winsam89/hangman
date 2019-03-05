// create an array of words
const words = ['apple', 'orange', 'banana', 'kiwi', 'mango', 'strawberry', 'pear','pineapple', 'papaya', 'cherry'];

// pick a random word from the array
var randomWord = Math.floor(Math.random() * words.length);
let chosenWord = words[randomWord];
let underScore = [];
let rightWord =[];
let wrongWord = [];

// Dom manipulation
let docUnderScore = document.getElementsByClassName('underscore');

console.log(chosenWord);

// set up answer and letter lenth by using _
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
}

// console.log(generateUnderscore());

// get users guess
document.addEventListener('keypress', (event) => {
let keycode = event.keyCode;
let keyword = String.fromCharCode(keycode);
console.log(keyword);
    


//guess is right
if(chosenWord.indexOf(keyword) > -1) {
    console.log(true);

    //push to right array
     rightWord.push(keyword);
     // replace underscore with letter
     underScore[chosenWord.indexOf(keyword)] = keyword;
     docUnderScore[0].innerHTML = underScore.join(' ');
     console.log(underScore);

     if(underScore.join('') == chosenWord) {
         alert('You Win');

        }
        // push to wrong array
    } else {
    wrongWord.push(keyword);
    console.log(false);

    }

});

docUnderScore[0].innerHTML = generateUnderscore().join(' ');




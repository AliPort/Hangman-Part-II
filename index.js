 const alphabet = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z']]


 //cited from gamedevelopment.tutsplus.com

 //alphabet list
const buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i <alphabet.length; i++) {
        letters.id = 'alphabet';
        list = createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}

//category

const category = function () {
    if ()

}



 
/*const lives;
const hint;
const clue; 
const correctGuess;
const wrongGuess;
const guess;
const selectedCategory;
const word;*/
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z']

 const categoryName = document.querySelector('#category');

 let word;
 let guesses = [];

 //cited from gamedevelopment.tutsplus.com

 //alphabet list
const myButtons = function () {
    const buttons = document.getElementById('myButtons');
    const letters = document.createElement('li');



    // query for the alphabet ol
  const alphabetList = document.querySelector('#alphabet');

    for (let i = 0; i <alphabet.length; i++) {
      // add in li elements for each letter
      const letterButton = document.createElement('input');
      letterButton.type = 'button';
      letterButton.value = alphabet[i];
      // have them be clickable
      letterButton.addEventListener('click',()=> {
        guesses.push(alphabet[i]);
        showWordSoFar();
      });
        //need to add in the for loop for the chosenWord
      

      /*for (var i = 0; i < hangman.alphabetArray.length; i++){
        $('<button/',{
          text:hangman.alphabetArray[i],
          width: '20px';
          click: function(event){
            checkGuess(event,false);
          }
        }).appendTo('#buttondiv');
      }*/

      // append to list
      alphabetList.append(letterButton);

        letters.id = 'alphabet';
        // list.id = 'letter';
        // list.innerHTML = alphabet[i];
        // check();
        // myButtons.appendChild(letters);
        // letters.appendChild(list);
    }
}

//category
const categories = ['States', 'Film', 'Athletes', 'Geography'];

function category(selectedCategory) {
  categoryName.innerHTML = `The category is ${categories[selectedCategory]}`;
}

//guesses
//got examples from stackoverflow.com
// const result = function () {
//   // TODO: temporary
//   let guess = document.createElement('div');

//     const wordHolder=document.getElementById('word')//.innerHTML = holder;
//     correct = document.createElement('ul');

//     for (let i = 0; i<word.length; i++){
//         correct.setAttribute('id', 'word');
//         guess.setAttribute('class', 'guess');
//       if (word[i] === "-") {
//         guess.innerHTML = "-";
//         space = 1;
//       } else {
//         guess.innerHTML = "_";
//       }
//       guesses.push(guess);
//       wordHolder.appendChild(correct);
//       correct.appendChild(guess);
//     }
//   }

  //lives

  const livesUpdate = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

  //hangman

  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  //drawing of hangman
// referrenced kodyaz.com
  const canvas =  function(){

    myHangman = document.getElementById("hangman");
    context = myHangman.getContext('2d');

    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    const head = function(){
      myHangman = document.getElementById("hangman");
      context = myHangman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  const draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   const frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   const frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   const frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   const frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   const torso = function() {
     draw (60, 36, 60, 70);
   };
  
   const rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   const leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   const rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   const leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
 
  const showWordSoFar = () => {
    // get the word div
    const wordDiv = document.querySelector('#word');
    // convert the word into individual blanks (maybe with some letters filled in)
    let blanks = '';
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (letter !== ' ') {
        if (guesses.includes(letter.toLowerCase())) {
          blanks = blanks + letter + '&nbsp;';
        } else {
          blanks = blanks + '_&nbsp;';
        }
      } else {
        blanks = blanks + '&nbsp;&nbsp;';
      }
    }
    // change the div's inner text to be the individual blanks
    wordDiv.innerHTML = blanks;
  }

  const play = function () {
    let words = [
        ["New Mexico", "New York", "Florida", 'Minnesota'],
        ['Grease', 'James Bond', 'A Leauge of Their Own', 'ET' ],
        ['Seth Curry', 'Kirby Puckett', 'Conor McGregor', 'Tom Brady'],
        ['Washington Monument', 'Grand Canyon', 'Sydney Opera House', 'The Eiffel Tower'],
    ];

    const selectedCategory = Math.floor(Math.random() * categories.length);
    word = words[selectedCategory][Math.floor(Math.random() * words[selectedCategory].length)];
    // word = word.replace(/\s/g, "-");
    console.log(word);
    myButtons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    // result();
    // comments();
    category(selectedCategory);
    canvas();
    showWordSoFar();
  }

  play();


  let endScore = lives;
    if (lives < 0)  {
      text = "You've lost"
    } else if (lives > 0) {
      text = "You've won"
    }                                              
  

//hint
hint.onclick = function() {

  hints = [
    ['The land of enchantment', 'Broadway lives here', 'The Sunshine State', 'The star of the North'],
    ['Zucko and gang', 'Casino Royale and Never Say Never Again', "There's no crying in baseball!", 'Phone Home'],
    ['The brother of Steph Curry', 'Won game 6 of 1991 World Series with his home run', 'First Irish man to join the UFC', 'Has won 7 Super Bowl Championships'],
    ['The tallest structure in Washington D.C.', 'The most visited tourist destintation in the United States', 'More than 10.9 million people visit this famous place in Australia each year', 'This was built to mark the 100th anniversary of the French Revolution'],
];

var catagoryIndex = categories.indexOf(selectedCategory);
var hintIndex = selectedCategory.indexOf(word);
showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
};
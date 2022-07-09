 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z']


 //cited from gamedevelopment.tutsplus.com

 //alphabet list
const myButtons = function () {
    buttons = document.getElementById('myButtons');
    letters = document.createElement('li');

    // query for the alphabet ol
    const alphabetList = document.querySelector('#alphabet');

    for (var i = 0; i <alphabet.length; i++) {
      // add in li elements for each letter
      const letterButton = document.createElement('input');
      letterButton.type = 'button';
      letterButton.value = alphabet[i];
      // have them be clickable

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

function category() {
    if (selectedCategory === category[0]) {
        categoryName.innerHTML = "The category is States";
    } else if (selectedCategory === category[1]) {
        categoryName.innerHTML = "The category is Film";
    } else if (selectedCategory === category[2]) {
        categoryName.innerHTML = "The category is Athletes";
    } else if (selectedCategory === category[3]) {
     categoryName.innerHTML = "The category is Geography";
    } else if (selectedCategory === category [4]){
    }
  }

//guesses
//got examples from stackoverflow.com
result = function () {
    wordHolder=document.getElementById('holder');
    correct = document.createElement('ul');

    for (const i = 0; i<word.length; i++){
        correct.setAttribute('id', 'word');
        guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  //lives

  livesUpdate = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
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
  
    head = function(){
      myHangman = document.getElementById("hangman");
      context = myHangman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
 

  play = function () {
    categories = [
        ["New Mexico", "New York", "Florida", 'Minnesota'],
        ['Grease', 'James Bond', 'A Leauge of Their Own', 'ET' ],
        ['Seth Curry', 'Kirby Puckett', 'Conor McGregor', 'Tom Brady'],
        ['Washington Monument', 'Grand Canyon', 'Sydney Opera House', 'The Eiffel Tower'],
    ];

    selectedCategory = categories[Math.floor(Math.random() * categories.length)];
    word = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    myButtons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

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

 const alphabet = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z']]

const buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    //cited from gamedevelopment.tutsplus.com
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



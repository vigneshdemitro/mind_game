// Holds the current level of the user
var usrlvl = 1;

// To hold the random numbers generated according to level
var randArray = [];

// To hold the input from the user to check the result
var userArray = [];

// To Start the game on page load
function startlevel() {
    var level = document.getElementById('lvl');
    level.innerHTML = "Level " + usrlvl;
    document.getElementById('btmdiv').appendChild(level);
    randArray.push(getRandomNumber());
    console.log('rand', randArray);
    randArray.forEach(element => {
        setTimeout(function(){
            var div = document.getElementById(element);
            div.setAttribute('style', 'animation-name:blink')
        }, 500)
    })
}

// To get the div id to check with system generated pattern
function check(id) {
    userArray.push(parseInt(id));
    if (userArray.length == randArray.length) {
        if (result(randArray, userArray)) {
            usrlvl++;
            generateRandom();
            console.log('rand', randArray);
            glow(randArray);
            var level = document.getElementById('lvl');
            level.innerHTML = "Level " + usrlvl;
            document.getElementById('btmdiv').appendChild(level);
        }
        else {
            alert('Game Over');
            document.location.reload();           
        }
    }
}

// To generate a random number between 1 & 4 which is kept as div id
function getRandomNumber() {
    return Math.floor(Math.random() * 4) + 1;
}

// To compare system generated array with user clicked div pattern to find the result
function result(sysArray, usrArray) {
    for (let i = 0; i < sysArray.length; i++) {
        if (sysArray[i] == usrArray[i]) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

// To generate random array according to current level if user clears a level
function generateRandom() {
    randArray = [];
    userArray = [];
    for (let i = 0; i < usrlvl; i++) {
        randArray[i] = getRandomNumber();
    }
}

// To make the div glow according to array index
function glow(inpArray) {
    if (inpArray.length > 0) {
        setTimeout(function () {
            var div = document.getElementById(inpArray[0]);
            div.setAttribute('style', 'animation-name:blink');
            glow(inpArray.slice(1));
        }, 500);
    }
}
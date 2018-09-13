var form = document.querySelector('#form');
var content = document.querySelector('#content');

var age = prompt('How old are you?');

if (age > 18) {
    // show website
    content.style.display = 'block';
    var name = prompt('What is your name?');
    document.querySelector('.message').innerHTML = "Welcome " + name + " to something really cool!";
    document.querySelector('#enter').className = 'granted';
} else {
    // if not old enough
    content.style.display = 'none';
    document.querySelector('.message').innerHTML = "You are not old enough..sorry";
    document.querySelector('#enter').className = 'denied';
}
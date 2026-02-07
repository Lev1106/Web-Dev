

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );
if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}
if (0) { // 0 is falsy
    alert(0);
}
if (1) { // 0 is falsy
    alert(1);
}

year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
    alert( 'You guessed it right!' );
} else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}
year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
    alert( 'Too early...' );
} else if (year > 2015) {
    alert( 'Too late' );
} else {
    alert( 'Exactly!' );
}
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

alert(accessAllowed);
accessAllowed = age > 18 ? true : false;



age = prompt('age?', 18);

message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';

alert( message );

if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
    alert('Right!') : alert('Wrong.');
if (company == 'Netscape') {
    alert('Right!');
} else {
    alert('Wrong.');
}

// if (a string with zero)
// Yes, because "0" converts to true

// The name of JavaScrip
'use strict';

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}


// Show the sign
let value = prompt('Type a number', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}


//Rewrite 'if' into '?'
result = (a + b < 4) ? 'Below' : 'Over';

message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';
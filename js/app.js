'use strict';

function guessingGame() {
    let siteVisitor = prompt('Hello. What is your name?');

    alert(`Welcome, ${siteVisitor}.\n\nLet's see what you know about me.\n\nPlease answer the following questions with Yes [Y/Yes] or No [N/No].`);

    let qOne = prompt('Did I go to Stevens Institute of Technology?').toLowerCase()

    if(qOne === 'yes' || qOne ==='y') {
        alert('Correct!');
    } else if(qOne === 'no' || qOne === 'n') {
        alert('Incorrect');
    } else {
        alert ('That was an invalid response!');
    }

    let qTwo = prompt('I have my Master\'s in Engineering Management.').toLowerCase();

    if(qTwo === 'no' || qTwo ==='n') {
        alert('Correct!');
    } else if(qTwo === 'yes' || qTwo === 'y') {
        alert('Incorrect!');
    } else {
        alert ('That was an invalid response!');
    };

    let qThree = prompt('I graduated from university in 2013.').toLowerCase();

    if(qThree === 'yes' || qThree ==='y') {
        alert('Correct!');
    } else if(qThree === 'no' || qThree === 'n') {
        alert('Incorrect');
    } else {
        alert ('That was an invalid response!');
    };

    let qFour = prompt('I served in the Marines.').toLowerCase();

    if(qFour === 'yes' || qFour ==='y') {
        alert('Correct!');
    } else if(qFour === 'no' || qFour === 'n') {
        alert('Incorrect');
    } else {
        alert ('That was an invalid response!');
    };

    let qFive = prompt('I was a cook in the military.').toLowerCase();

    if(qFive === 'yes' || qFive ==='y') {
        alert('Incorrect!');
    } else if(qFive === 'no' || qFive === 'n') {
        alert('Correct');
    } else {
        alert ('That was an invalid response!');
    };
};
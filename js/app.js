'use strict';

function myGuessingGame() {
    let siteVisitor = prompt('Hello. What is your name?');

    alert(`Welcome, ${siteVisitor}.\n\nLet's see what you know about me.\n\nPlease answer the following questions with Yes [Y/Yes] or No [N/No].`);

    let qOne = prompt('Did I go to Stevens Institute of Technology?').toLowerCase()

    if(qOne === 'yes' || qOne ==='y') {
        // console.log('Correct!');
        alert('Correct!');
    } else if(qOne === 'no' || qOne === 'n') {
        // console.log('Incorrect!');
        alert('Incorrect');
    } else {
        // console.log('That was an invalid response!')
        alert ('That was an invalid response!');
    }

    let qTwo = prompt('I have my Master\'s in Engineering Management.').toLowerCase();

    if(qTwo === 'no' || qTwo ==='n') {
        // console.log('Correct!');
        alert('Correct!');
    } else if(qTwo === 'yes' || qTwo === 'y') {
        // console.log('Incorrect!');
        alert('Incorrect!');
    } else {
        // console.log('That was an invalid response!')
        alert ('That was an invalid response!');
    };

    let qThree = prompt('I graduated from university in 2013.').toLowerCase();

    if(qThree === 'yes' || qThree ==='y') {
        // console.log('Correct!');
        alert('Correct!');
    } else if(qThree === 'no' || qThree === 'n') {
        // console.log('Incorrect!');
        alert('Incorrect');
    } else {
        // console.log('That was an invalid response!')
        alert ('That was an invalid response!');
    };

    let qFour = prompt('I served in the Marines.').toLowerCase();

    if(qFour === 'yes' || qFour ==='y') {
        // console.log('Correct!');
        alert('Correct!');
    } else if(qFour === 'no' || qFour === 'n') {
        // console.log('Incorrect!');
        alert('Incorrect');
    } else {
        // console.log('That was an invalid response!')
        alert ('That was an invalid response!');
    };

    let qFive = prompt('I was a cook in the military.').toLowerCase();

    if(qFive === 'yes' || qFive ==='y') {
        // console.log('Incorrect!');
        alert('Incorrect!');
    } else if(qFive === 'no' || qFive === 'n') {
        // console.log('Correct!');
        alert('Correct');
    } else {
        // console.log('That was an invalid response!')
        alert ('That was an invalid response!');
    };
};
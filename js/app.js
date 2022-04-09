'use strict';

var score = 0;

function btnGuessingGame() {

    let siteVisitor = prompt('Hello. What is your name?');
    let validResponse = false;

    alert(`Welcome, ${siteVisitor}.\n\nLet's see what you know about me.\n\nPlease answer the following questions with Yes [Y/Yes] or No [N/No].`);

    while (validResponse === false) {

        let qOne = prompt('Did I go to Stevens Institute of Technology?').toLowerCase();

        if (qOne === 'yes' || qOne === 'y') {
            alert('Correct!');
            score++;
            validResponse = true;
            break;

        } else if (qOne === 'no' || qOne === 'n') {
            alert('Incorrect');
            validResponse = true;
            break;

        } else {
            alert('That was an invalid response!');
        };
    };

    validResponse = false;

    while (validResponse === false) {

        let qTwo = prompt('I have my Master\'s in Engineering Management.').toLowerCase();

        if (qTwo === 'no' || qTwo === 'n') {
            alert('Correct!');
            validResponse = true;
            score++;
            break;

        } else if (qTwo === 'yes' || qTwo === 'y') {
            alert('Incorrect!');
            validResponse = true;
            break;

        } else {
            alert('That was an invalid response!');
        };
    };

    validResponse = false;

    while (validResponse === false) {

        let qThree = prompt('I graduated from university in 2013.').toLowerCase();

        if (qThree === 'yes' || qThree === 'y') {
            alert('Correct!');
            validResponse = true;
            score++;
            break;

        } else if (qThree === 'no' || qThree === 'n') {
            alert('Incorrect');
            validResponse = true;
            break;

        } else {
            alert('That was an invalid response!');
        };
    };

    validResponse = false;

    while (validResponse === false) {

        let qFour = prompt('I served in the Marines.').toLowerCase();

        if (qFour === 'yes' || qFour === 'y') {
            alert('Correct!');
            score++;
            validResponse = true;
            break;

        } else if (qFour === 'no' || qFour === 'n') {
            alert('Incorrect');
            validResponse = true;
            break;

        } else {
            alert('That was an invalid response!');
        };
    };

    validResponse = false;

    while (validResponse === false) {

        let qFive = prompt('I was a cook in the military.').toLowerCase();

        if (qFive === 'yes' || qFive === 'y') {
            alert('Incorrect!');
            validResponse = true;
            break;

        } else if (qFive === 'no' || qFive === 'n') {
            alert('Correct');
            score++;
            validResponse = true;
            break;

        } else {
            alert('That was an invalid response!');
        };
    };

    // Random number for number guessing game.
    let number = Math.floor(Math.random() * 10) + 1;

    // Random number intentionally left in code.
    console.log(number);

    alert('Try to guess a number I\'m thinking of between 1 to 10.\n\n You have four attempts.');

    for (let i = 0; i < 5; i++) {

        let userGuess = parseInt(prompt('What is your guess?'));

        if (userGuess === number) {
            score++;
            alert(`Congrats! You guessed correct on try ${i + 1}!\nYou must be some sort of genius!`);
            break;

        } else if (userGuess < number) {
            alert(`Too low. That was attempt ${i + 1}.`);

        } else if (userGuess > number) {
            alert(`Too high. That was attempt ${i + 1}.`);
        };
    };

    let cars = ['Acura', 'BMW', 'Jeep', 'Lexus', 'Toyota', 'Ford', 'Volkswagen', 'Hummer', 'Audi', 'Land Rover'];
    let carsLower = cars.map(car => { return car.toLowerCase() });
    let favorite = cars[Math.floor(Math.random() * (cars.length - 1))];

    console.log(favorite);

    alert('Try to guess which car maker is my favorite. \n\n You have six attempts.');

    for (let i = 0; i < 7; i++) {

        let userGuess = prompt(`Which car brand from the following list do you think is my favorite?\n\n${cars.toString()}.\n\n[Response is case insensitive]\n\nYou have ${6 - i} attempts remaining.`);
        
        if (favorite.toLowerCase() === userGuess.toLowerCase()) {
            score++;
            alert(`Congrats! You guessed correct on try ${i + 1}!\nYou must be some sort of genius!`);
            break;
        };

        for (let i = 0; i < carsLower.length; i++) {
            
            if (carsLower[i] === userGuess.toLowerCase()) {
                cars.splice(i, 1);
                carsLower = cars.map(car => { return car.toLowerCase() });
            };
        };

    };

    let totalscore = ((score / 7).toFixed(2) * 100).toString() + '%';

    alert(`Great job! You earned a score of ${totalscore}, ${score} out of 7.`);
};
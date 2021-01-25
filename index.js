const ageInput = document.getElementById("age-input");
const sleepInput = document.getElementById("sleep-input");
const message = document.querySelector(".message--js");
const checkButton = document.getElementById("check");
let age;
let sleep;
let typeOfPerson;
let minSleep;
let maxSleep;

function setTypeOfPerson() {
    age = ageInput.value;
    if (age > 0) {
        if (age < 6) {
            typeOfPerson = 'baby';
            console.log(typeOfPerson);
        } else if (age < 14) {
            typeOfPerson = 'kid';
            console.log(typeOfPerson);
        } else if (age < 18) {
            typeOfPerson = 'teenager';
            console.log(typeOfPerson);
        } else if (age < 64) {
            typeOfPerson = 'adult';
            console.log(typeOfPerson);
        } else if (age < 100) {
            typeOfPerson = 'older adult';
            console.log(typeOfPerson);
        } else if (age >= 120) {
            typeOfPerson = 'dead';
            console.log(typeOfPerson);
        }
        console.log('age: ' + ageInput.value);
    } else {
        alert('Please enter your age. It should be higher than 0.');
        if (age <= 0) {
            ageInput.value = 1;
        };
    };
};
function sleepRequirements() {
    setTypeOfPerson();
    switch (typeOfPerson) {
        case 'baby':
            minSleep = 10;
            maxSleep = 13;
            break;
        case 'kid':
            minSleep = 9;
            maxSleep = 11;
            break;
        case 'teenager':
            minSleep = 8;
            maxSleep = 10;
            break;
        case 'adult':
            minSleep = 7;
            maxSleep = 9;
            break;
        case 'older adult':
            minSleep = 7;
            maxSleep = 8;
            break; 
    }
};
function produceMessage() {
    message.innerHTML = '';
    sleepRequirements();
    sleep = parseFloat(sleepInput.value);
    console.log(sleep);
    if (typeOfPerson == 'dead') {
        message.style.color = 'black';
        message.innerHTML = `You're probably sleeping forever, rest in peace.`;
    } else {
        if (sleep < 0) {
            alert(`Are you sure you've slept ${sleep} hours?`);
            sleepInput.value = 0;
        } else if (age > 0 && sleep > 0) {
            if (sleep < minSleep) {
                message.style.color = 'orangered';
                message.innerHTML = `This was not enough! You should sleep at least ${minSleep} hours.`;
            } else if (sleep <= maxSleep) {
                message.style.color = 'green';
                message.innerHTML = 'You have slept well.';
            } else if (sleep > maxSleep) {
                message.style.color = 'blue';
                message.innerHTML = `You've slept too much! You shouldn't sleep longer than ${maxSleep} hours.`;
            };
        } else if (age > 0 && sleep === 0) {
            console.log('sleep: ' + sleep);
            message.style.color = 'red';
            message.innerHTML = `You haven't slept at all! You should rest.`;
        } else {
            sleepInput.value = '0';
        }
    }   
};

checkButton.addEventListener('click', () => {
    produceMessage();
});
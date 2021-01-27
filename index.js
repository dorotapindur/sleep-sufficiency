const ageInput = document.getElementById("age-input");
const sleepInput = document.getElementById("sleep-input");
const message = document.querySelector(".message--js");
const checkButton = document.getElementById("check");
let age;
let sleep;
let typeOfPerson;
let minSleep;
let maxSleep;
let clear;

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
function changeColor(color) {
    window.clearTimeout(clear);
    console.log('clear timeout');
    message.style.color = color;
    document.body.style.backgroundColor = color;
    function removeColor() {
        message.style.color = '#ffffff00';
        document.body.style.backgroundColor =  '#00e1ff';
        ageInput.value = 1;
        sleepInput.value = 0;
        console.log('remove color');
    };
    clear = window.setTimeout(removeColor, 5000);
}
function produceMessage() {
    message.innerHTML = '';
    sleepRequirements();
    sleep = parseFloat(sleepInput.value);
    console.log(sleep);
    if (typeOfPerson == 'dead') {
        changeColor('#3a3a3a');
        message.innerHTML = `You're probably sleeping forever, rest in peace.`;
    } else {
        if (sleep < 0) {
            alert(`Are you sure you've slept ${sleep} hours?`);
            sleepInput.value = 0;
        } else if (age > 0 && sleep > 0) {
            if (sleep < minSleep) {
                changeColor('#ff6600');
                message.innerHTML = `This was not enough! You should sleep at least ${minSleep} hours.`;
            } else if (sleep <= maxSleep) {
                changeColor('#00bb5d');
                message.innerHTML = 'You have slept well.';
            } else if (sleep > maxSleep) {
                changeColor('#002c6e');
                message.innerHTML = `You've slept too much! You shouldn't sleep longer than ${maxSleep} hours.`;
            };
        } else if (age > 0 && sleep === 0) {
            changeColor('red');
            message.innerHTML = `You haven't slept at all! You should rest.`;
        } else {
            sleepInput.value = '0';
        }
    }   
};

checkButton.addEventListener('click', () => {
    produceMessage();
});
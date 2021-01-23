const ageInput = document.getElementById("age-input");
const sleepInput = document.getElementById("sleep-input");
const message = document.querySelector(".message--js");
const checkButton = document.getElementById("check");
let age;
let sleep;
let typeOfPerson;

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
        alert('Please enter your age');
    };
};
function produceMessage() {
    sleep = sleepInput.value;
    
    if (sleep > 0) {
        switch (typeOfPerson) {
            case 'baby':
                if (sleep < 10) {
                    message.innerHTML = 'This was not enough! You should sleep at least 10 hours.';
                } else if (sleep <= 13) {
                    message.innerHTML = 'You have slept well.';
                } else if (sleep > 13) {
                    message.innerHTML = `You've slept too much!`;
                };
                break;
            case 'kid':
                if (sleep < 9) {
                    message.innerHTML = 'This was not enough!';
                } else if (sleep <= 11) {
                    message.innerHTML = 'You have slept well.';
                } else if (sleep > 11) {
                    message.innerHTML = `You've slept too much!`;
                };
                break;
            case 'teenager':
                if (sleep < 8) {
                    message.innerHTML = 'This was not enough!';
                } else if (sleep <= 10) {
                    message.innerHTML = 'You have slept well.';
                } else if (sleep > 10) {
                    message.innerHTML = `You've slept too much!`;
                };
                break;
            case 'adult':
                if (sleep < 7) {
                    message.innerHTML = 'This was not enough!';
                } else if (sleep <= 9) {
                    message.innerHTML = 'You have slept well.';
                } else if (sleep > 9) {
                    message.innerHTML = `You've slept too much!`;
                };
                break;
            case 'older adult':
                if (sleep < 7) {
                    message.innerHTML = 'This was not enough!';
                } else if (sleep <= 8) {
                    message.innerHTML = 'You have slept well.';
                } else if (sleep > 8) {
                    message.innerHTML = `You've slept too much!`;
                };
                break;
            case 'dead':
                message.innerHTML = `You're probably sleeping forever, rest in peace.`;
                break;
        }
    } else {
        message.innerHTML = `You haven't slept at all!`;
    }
}

checkButton.addEventListener('click', () => {
    setTypeOfPerson();
    produceMessage();
});
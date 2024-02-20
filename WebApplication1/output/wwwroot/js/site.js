
// function increase() {
//     var increases = document.querySelectorAll(".counter");

//     for (var i = 0; i < increases.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = increases[i].getBoundingClientRect().top;
//         var elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//             for (var i = 0; i < 500; i++) {
//                 document.getElementById("c1").innerHTML = i;
//                 setTimeout(0.001);
//             }
//         } else {

//         }
//     }
// }

//window.addEventListener("scroll", increase);




function handleRegisterFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    };
    registerUser(user);
    console.log('Register form submitted.');
}


var isLoggedIn = false;

function handleLoginFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    };


    fetch('https://localhost:7076/api/User/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('User is not registered.');
                } else if (response.status === 400) {
                    throw new Error('Invalid password.');
                } else {
                    throw new Error('Network response was not ok');
                }
            }
            return response.json();
        })
        .then(data => {
            console.log('Login successful:', data);
            isLoggedIn = true;
            document.getElementById('buyButton').disabled = false;
            updateWelcomeMessage();
        })
        .catch(error => {
            console.error('Error during login:', error.message);
            alert(error.message);
        });
}



function registerUser(user) {
    fetch('https://localhost:7076/api/User/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Registration response:', data);
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
}


function loginUser(user) {
    fetch('https://localhost:7076/api/User/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse response as JSON
        })
        .then(data => {
            console.log('Login successful:', data.message);
            // Assuming data contains the user information
            console.log('User:', data.user);
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
}


let loggedInUser = null;

function loginUser(user) {

    loggedInUser = { nickname: user.username };

    updateWelcomeMessage();
}

function updateWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (loggedInUser) {
        welcomeMessage.textContent = `Welcome, ${loggedInUser.nickname}!`;
        welcomeMessage.style.display = 'block';
    } else {
        welcomeMessage.textContent = '';
        welcomeMessage.style.display = 'none';
    }
}

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
        username: formData.get('username'),
        password: formData.get('password')
    };
    loginUser(user);
    console.log('Login form submitted.');
});




document.getElementById('loginForm').addEventListener('submit', handleLoginFormSubmit);
document.getElementById('registerForm').addEventListener('submit', handleRegisterFormSubmit);





// const disabledDates = ['2023-10-10', '2023-10-15'];
// const purchasedDates = [];

// const dateInput = document.getElementById('dateInput');
// const buyButton = document.getElementById('buyButton');

// function isUserLoggedIn() {


//     return true;
// }

// dateInput.addEventListener('input', function () {
//     const selectedDate = this.value;
//     buyButton.disabled = !isLoggedIn || !selectedDate || disabledDates.includes(selectedDate) || purchasedDates.includes(selectedDate);
// });

// function updatePurchasedDatesDisplay() {
//     purchasedDatesList.innerHTML = '';

//     purchasedDates.forEach(date => {
//         const listItem = document.createElement('li');
//         listItem.textContent = date;
//         purchasedDatesList.appendChild(listItem);
//     });
// }

// buyButton.addEventListener('click', function () {
//     const selectedDate = dateInput.value;

//     if (isLoggedIn) {

//         alert('Date purchased: ' + selectedDate);

//         purchasedDates.push(selectedDate);
//         dateInput.value = '';
//         buyButton.disabled = true;
//         updatePurchasedDatesDisplay();
//     } else {
//         alert('You need to be logged in to buy dates.');
//     }
// });

function disableSelectedLocation(locationType) {
    const currentLocationSelect = document.getElementById('currentLocation');
    const destinationSelect = document.getElementById('destination');

    const selectedOptionValue = (locationType === 'currentLocation') ?
        currentLocationSelect.value :
        destinationSelect.value;

    if (locationType === 'currentLocation') {
        destinationSelect.querySelectorAll('option').forEach(option => {
            if (option.value === selectedOptionValue) {
                option.disabled = true;
                option.style.color="#808080"
            } else {
                option.disabled = false;
            }
        });
    } else {
        currentLocationSelect.querySelectorAll('option').forEach(option => {
            if (option.value === selectedOptionValue) {
                option.disabled = true;
                option.style.color="#808080"
            } else {
                option.disabled = false;
            }
        });
    }
}




let counter = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = 0;
    }

    counterValue.innerHTML = counter;
});

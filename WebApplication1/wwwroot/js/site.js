
function increase() {
    var increases = document.querySelectorAll(".counter");

    for (var i = 0; i < increases.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = increases[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        console.log("kls");
            for (var i = 0; i < 500; i++) {
                document.getElementById("c1").innerHTML = i;
                setTimeout(0.001);
            }
        } else {
            
        }
    }
}

window.addEventListener("scroll", increase);




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


let isLoggedIn = false;  

    function handleLoginFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const user = {
            username: formData.get('username'),
            password: formData.get('password')
        };
        
        isLoggedIn = true;
        console.log('Login successful.');
        
        document.getElementById('buyButton').disabled = false;
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
            return response.json();
        })
        .then(data => {
            console.log('Login successful:', data);
            
        })
        .catch(error => {
            console.error('Error during login:', error);
        });
}

let loggedInUser = null;  // Assume no user is initially logged in

function loginUser(user) {
    // Simulated login logic - set a user object with a "nickname"
    loggedInUser = { nickname: user.username };  // Assuming the username is used as the nickname
    // Update the UI to show the welcome message
    updateWelcomeMessage();
}

function updateWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (loggedInUser) {
        welcomeMessage.textContent = `Welcome, ${loggedInUser.nickname}!`;
        welcomeMessage.style.display = 'block';  // Show the welcome message
    } else {
        welcomeMessage.textContent = '';  // Clear the welcome message
        welcomeMessage.style.display = 'none';  // Hide the welcome message
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





const disabledDates = ['2023-10-10', '2023-10-15'];
        const purchasedDates = [];  

        const dateInput = document.getElementById('dateInput');
        const buyButton = document.getElementById('buyButton');

        function isUserLoggedIn() {
            
            
            return true;  
        }

        dateInput.addEventListener('input', function () {
            const selectedDate = this.value;
            buyButton.disabled = !isLoggedIn || !selectedDate || disabledDates.includes(selectedDate) || purchasedDates.includes(selectedDate);
        });

        function updatePurchasedDatesDisplay() {
            purchasedDatesList.innerHTML = '';  
    
            purchasedDates.forEach(date => {
                const listItem = document.createElement('li');
                listItem.textContent = date;
                purchasedDatesList.appendChild(listItem);
            });
        }
    
        buyButton.addEventListener('click', function () {
            const selectedDate = dateInput.value;
    
            if (isLoggedIn) {
                
                alert('Date purchased: ' + selectedDate);
                
                purchasedDates.push(selectedDate);
                dateInput.value = ''; 
                buyButton.disabled = true; 
                updatePurchasedDatesDisplay();  
            } else {
                alert('You need to be logged in to buy dates.');
            }
        });                                                                                     
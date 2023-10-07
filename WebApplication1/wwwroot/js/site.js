<<<<<<< HEAD
﻿function increase() {
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
=======
﻿function registerUser() {
    

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
            return response.json();
        })
        .then(data => {
            console.log('Registration successful:', data);
        })
        .catch(error => {
            console.error('Error during registration:', error);
        });
}


function loginUser() {
    

    fetch('https://localhost:7076/api/User/login', {
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


function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    
    
    localStorage.setItem('incrementedValue', value);
}

window.onload = function () {
    var savedValue = localStorage.getItem('incrementedValue');
    if (savedValue !== null) {
        document.getElementById('number').value = savedValue;
    }
}

>>>>>>> 82c160d86addd7f391535a7f147b2f8aebd597bc

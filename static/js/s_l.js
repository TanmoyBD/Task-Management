// Initialization for ES Users



document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('SignUpForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('exampleFormControlInput1').value;
        const password1 = document.getElementById('exampleFormControlInput11').value;
        const password2 = document.getElementById('exampleFormControlInput12').value;
        
        if (password1 !== password2) {
            alert('Passwords do not match');
            return;
        }

        const data = {
            username: username,
            password: password1
        };

        fetch('http://127.0.0.1:8000/user/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const returnedUsername = data.username;
            //alert(`Registration successful! Welcome, ${returnedUsername}!`);
            window.location.href = `http://127.0.0.1:8000/`;
        })
        
        .catch(error => console.error('Error:', error));
    });

})

// Function to get the CSRF token from cookies
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

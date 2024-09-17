let url = "https://66e7e6bfb17821a9d9da7097.mockapi.io/User";
let inputusername = document.getElementById('username')
let inputFname = document.getElementById('Fname')
let inputLname = document.getElementById('Lname')
let inputEmail = document.getElementById('Email')
let inputPassword = document.getElementById('password')
let signbtn = document.getElementById('signbtn')

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

signbtn.addEventListener('click' , ()=>{
    if (inputFname.value.length < 5) {
        alert('Name must be at least 5 characters long');
        return;  
    }
    if (inputLname.value.length < 5) {
        alert('Name must be at least 5 characters long');
        return;  
    }
    if (inputPassword.value.length < 8) {
        alert('Password must be at least 8 characters long');
        return;  
    }
    if (!isValidEmail(inputEmail.value)) {
        alert('Invalid email');
        return;  
    }
    fetch(url , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: inputusername.value,
            firstName: inputFname.value,
            lastName: inputLname.value,
            email: inputEmail.value,
            password: inputPassword.value,
            
        })
    }).then(response => response.json()).then(
        data => {
            location.assign('index.html'); 
            
        }
    )
})

let url = "https://66e7e6bfb17821a9d9da7097.mockapi.io/User";
let inputUsername = document.getElementById('username');
let inputPassword = document.getElementById('password');
let loginbtn = document.getElementById('loginbtn');
let fullName = document.getElementById('fullName');


loginbtn.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let loginSuccessful = false; 
            let loggedInUser = null;
            let Fname = "";
            let Lname = "";
            data.forEach(element => {
                if (inputUsername.value === element.username && inputPassword.value === element.password) {
                    loginSuccessful = true;
                    loggedInUser = element; 
                    Fname = element.firstName; 
                    Lname = element.lastName;
                }
            });

            if (loginSuccessful) {
                localStorage.setItem('username', loggedInUser.username); 
                localStorage.setItem('userID', loggedInUser.id); 
                localStorage.setItem('fullName', `${Fname} ${Lname}`);
                location.assign('home.html');
            } else {
                alert('Password or username is wrong, try again');
            }
        })
});



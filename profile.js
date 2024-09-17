let fullName = localStorage.getItem('fullName');

        if (fullName) {
            document.getElementById('fullName').textContent = fullName;
        } 
        // else {
        //     location.assign('index.html');
        // }

 let logoutBtn = document.getElementById('logoutbtn');
        logoutBtn.addEventListener('click', () => {
             
            localStorage.removeItem('fullName'); 
            location.assign('index.html');
        });

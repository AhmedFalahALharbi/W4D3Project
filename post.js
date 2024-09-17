let url = "https://66e7e6bfb17821a9d9da7097.mockapi.io/User";


let postTitle = document.getElementById("title");
let postContent = document.getElementById("postContent");
let Imgsrc = document.getElementById("imgsrc");
let newpost = document.getElementById("newpost");

newpost.addEventListener('click', () => {
    const post = {
        postTitle: postTitle.value,
        postContent: postContent.value,
        postImg: Imgsrc.value
    };

    const userID = localStorage.getItem('userID');

    if (userID) {
        fetch(`${url}/${userID}`)
            .then(response => response.json())
            .then(user => {
                const updatedPosts = user.posts ? [...user.posts, post] : [post];  

                fetch(`${url}/${userID}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ...user,
                        posts: updatedPosts
                    })
                })
                .then(response => response.json())
                .then(data => {
                    alert('Post created successfully!');
                    location.reload();  
                })
                .catch(error => console.error('Error updating posts:', error));
            })
            .catch(error => console.error('Error fetching user data:', error));
    } else {
        alert('User not logged in. Please log in to create a post.');
    }
});

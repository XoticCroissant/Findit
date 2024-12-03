const API_URL = 'https://your-backend-url.com/fetch_subreddit'; // Replace with your backend URL

function goToMainPage() {
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('mainContent').innerHTML = '';
}

function fetchSubreddit(subreddit = null) {
    if (!subreddit) {
        subreddit = document.getElementById('subredditInput').value;
    }

    fetch(`${API_URL}?subreddit=${subreddit}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('sidebar').style.display = 'none';
            const postsList = document.getElementById('postsList');
            postsList.innerHTML = '';
            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${post.title}</strong><br>${post.is_video ? 'Video' : (post.num_images ? `${post.num_images} Images` : 'Text')}`;
                listItem.onclick = () => {
                    document.getElementById('mainContent').innerHTML = `<h3>${post.title}</h3><p>${post.selftext || 'No content'}</p>`;
                };
                postsList.appendChild(listItem);
            });
        })
        .catch(err => console.error(err));
}

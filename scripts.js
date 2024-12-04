const API_URL = 'https://your-backend-url.com/fetch_subreddit'; // Replace with your backend URL

function goToMainPage() {
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('mainContent').innerHTML = '';
}

function fetchSubreddit(subreddit = null) {
    if (!subreddit) {
        subreddit = document.getElementById('subredditInput').value;
    }

    // Function to show logs in the console box
function logToConsole(message) {
    const consoleOutput = document.getElementById('console-output');
    consoleOutput.textContent += message + '\n';  // Append the log message
}

// Toggle the console visibility when F12 is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        const consoleBox = document.getElementById('console');
        consoleBox.classList.toggle('hidden');  // Show/hide the console
    }
});

// Example: Log a message to the console when the page is loaded
logToConsole('Console is now active. Press F12 to toggle it.');

    // Test script to ensure it's working
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is loaded!');
    alert('JavaScript is working!');
});


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

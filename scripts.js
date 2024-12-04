const API_URL = 'https://your-backend-url.com/fetch_subreddit'; // Replace with your backend URL

// Navigate back to the main page
function goToMainPage() {
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('mainContent').innerHTML = '';
    document.getElementById('subredditTitle').textContent = '';
}

// Fetch subreddit data
function fetchSubreddit(subreddit = null) {
    if (!subreddit) {
        subreddit = document.getElementById('subredditInput').value.trim();
    }

    if (!subreddit) {
        logToConsole('Please enter a subreddit name.');
        return;
    }

    logToConsole(`Fetching posts from r/${subreddit}...`);

    fetch(`${API_URL}?subreddit=${subreddit}`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch subreddit: ${response.status}`);
            return response.json();
        })
        .then(data => {
            document.getElementById('sidebar').style.display = 'none';
            document.getElementById('subredditTitle').textContent = `Posts from r/${subreddit}`;
            
            const postsList = document.getElementById('postsList');
            postsList.innerHTML = ''; // Clear previous posts

            data.forEach(post => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${post.title}</strong><br>
                    ${post.is_video ? 'Video' : (post.num_images ? `${post.num_images} Images` : 'Text')}`;
                listItem.onclick = () => {
                    document.getElementById('mainContent').innerHTML = `
                        <h3>${post.title}</h3>
                        <p>${post.selftext || 'No additional content available.'}</p>`;
                };
                postsList.appendChild(listItem);
            });

            logToConsole(`Loaded ${data.length} posts from r/${subreddit}.`);
        })
        .catch(err => {
            logToConsole(`Error: ${err.message}`);
        });
}

// Custom Console Feature
function logToConsole(message) {
    const consoleOutput = document.getElementById('console-output');
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight; // Auto-scroll to the bottom
}

// Toggle Settings Panel
function toggleSettings() {
    const settingsPanel = document.getElementById('settings');
    settingsPanel.style.display = settingsPanel.style.display === 'block' ? 'none' : 'block';
}

// Save settings and apply changes
function saveSettings() {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value;
    const tabName = document.getElementById('tabName').value;

    // Apply changes
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.body.style.fontSize = fontSize + 'px';
    document.title = tabName || 'Findit'; // Update tab name if provided

    // Hide settings panel after saving
    toggleSettings();
}


// Override console methods to redirect to custom console
(function overrideConsole() {
    const originalConsoleLog = console.log;
    console.log = function (message) {
        logToConsole(message);
        originalConsoleLog(message);
    };

    const originalConsoleError = console.error;
    console.error = function (message) {
        logToConsole(`ERROR: ${message}`);
        originalConsoleError(message);
    };
})();

// Toggle custom console visibility
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.altKey && event.key === 'c') {
        const consoleBox = document.getElementById('console');
        consoleBox.classList.toggle('hidden');
    }
});

// Initial log message to confirm functionality
console.log('Custom console initialized. Press Ctrl + Alt + C to toggle.');

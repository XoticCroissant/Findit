// Ensure console starts hidden
document.addEventListener('DOMContentLoaded', () => {
    const consoleDiv = document.getElementById("console");
    consoleDiv.classList.add("hidden");
});

// Toggle console visibility
function toggleConsole() {
    const consoleDiv = document.getElementById('console');
    consoleDiv.classList.toggle('visible');
}

// Toggle settings panel with slide animation
function toggleSettings() {
    const settingsPanel = document.getElementById('settings');
    if (settingsPanel.classList.contains('open')) {
        // Slide up to close
        settingsPanel.style.top = '-300px';
        setTimeout(() => settingsPanel.classList.remove('open'), 300); // Delay to match transition
    } else {
        // Slide down to open
        settingsPanel.classList.add('open');
        settingsPanel.style.top = '50px';
    }
}

// Apply user settings
function applySettings() {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value;

    // Update styles
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.body.style.fontSize = `${fontSize}px`;

    // Automatically update box colors to lighter shade
    const lighterColor = lightenColor(bgColor, 0.2);
    document.querySelectorAll('#sidebar, #mainContent').forEach(box => {
        box.style.backgroundColor = lighterColor;
    });
}

// Helper to lighten colors
function lightenColor(hex, percent) {
    const R = parseInt(hex.slice(1, 3), 16);
    const G = parseInt(hex.slice(3, 5), 16);
    const B = parseInt(hex.slice(5, 7), 16);

    const newR = Math.min(Math.round(R + (255 - R) * percent), 255);
    const newG = Math.min(Math.round(G + (255 - G) * percent), 255);
    const newB = Math.min(Math.round(B + (255 - B) * percent), 255);

    return `rgb(${newR}, ${newG}, ${newB})`;
}

// Search subreddit
function searchSubreddit() {
    const input = document.getElementById('searchInput').value.trim();
    if (!input) {
        console.log('Please enter a subreddit name.');
        return;
    }
    console.log(`Fetching posts from subreddit: ${input}`);
    // Here you can add code to fetch and display posts.
}

// Console Logic
document.addEventListener('DOMContentLoaded', () => {
    const consoleDiv = document.getElementById("console");
    consoleDiv.classList.add("hidden");
});

function toggleConsole() {
    const consoleDiv = document.getElementById('console');
    consoleDiv.classList.toggle('hidden');
}

// Settings Logic
function toggleSettings() {
    const settingsPanel = document.getElementById('settings');
    if (settingsPanel.style.top === '50px') {
        settingsPanel.style.top = '-300px';
    } else {
        settingsPanel.style.top = '50px';
    }
}

function applySettings() {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
    const fontSize = document.getElementById('fontSize').value;

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.body.style.fontSize = `${fontSize}px`;

    // Update box colors
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    sidebar.style.backgroundColor = lightenColor(bgColor, 0.2);
    mainContent.style.backgroundColor = lightenColor(bgColor, 0.2);
}

// Lighten color helper
function lightenColor(color, percent) {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent * 100);
    const R = (num >> 16) + amt;
    const G = ((num >> 8) & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;

    return `rgb(${Math.min(255, R)}, ${Math.min(255, G)}, ${Math.min(255, B)})`;
}

// Search Subreddit
function searchSubreddit() {
    const input = document.getElementById('searchInput').value.trim();
    if (!input) {
        console.log('Please enter a subreddit name.');
        return;
    }
    console.log(`Fetching posts from subreddit: ${input}`);
}

// Fetch Subreddit
function fetchSubreddit(subreddit) {
    console.log(`Fetching posts from subreddit: ${subreddit}`);
}

// Main Page Navigation
function goToMainPage() {
    console.log('Navigating to the main page.');
}


// Navigate to main page
function goToMainPage() {
    console.log('Navigating to the main page.');
    // Add logic to reset or clear the current view to the homepage.
}

const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeStylesheet.href = 'light-mode.css'; 
        themeToggle.textContent = 'Click Dark Mode';
    } else {
        body.classList.add('dark-mode');
        themeStylesheet.href = 'dark-mode.css'; 
        themeToggle.textContent = 'Click Light Mode';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('downloadLink');

    downloadButton.addEventListener('click', function () {
        // Define the GitHub repository information
        const username = 'vasanthdeveloper';
        const repo = 'https://github.com/vasanthdeveloper/javafresher/blob/main/Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf';
        const filename = 'Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf';

        // Create a link to the raw PDF file on GitHub
        const githubRawURL = `https://github.com/${username}/${repo}/raw/main/${filename}`;

        // Create an anchor element to trigger the download
        const anchor = document.createElement('a');
        anchor.href = githubRawURL;
        anchor.target = '_blank'; // Open in a new tab
        anchor.download = 'Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf'; // Set the desired filename
        anchor.click();
    });
});

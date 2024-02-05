document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.querySelector('.dark-mode-toggle'); // Updated selector

    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Check if dark mode was previously set
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
});

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

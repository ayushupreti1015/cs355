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
async function showImages() {
    clearInterval(imageInterval);
    const breed = breedInput.value.toLowerCase();
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    const imageContainer = document.getElementById('imageContainer');
  
    if (data.status === 'error') {
      imageContainer.innerHTML = '<p>No such breed</p>';
    } else {
      imageContainer.innerHTML = `<img src="${data.message}" alt="${breed}">`;
      imageInterval = setInterval(async () => {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        imageContainer.innerHTML = `<img src="${data.message}" alt="${breed}">`;
      }, 5000);
    }
  }
  
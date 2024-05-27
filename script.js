// Function to calculate the luminance of a color
function calculateLuminance(color) {
    const rgb = color.match(/\d+/g);
    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
    return luminance;
}

// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    const name = `ZER0_PIXEL: RGB(${r},${g},${b})`;
    return {
        color: color,
        name: name,
        luminance: calculateLuminance(color)
    };
}

// Function to set a new background color every 5-10 seconds
function changeColor() {
    const colorContainer = document.getElementById('color-container');
    const navMenu = document.getElementById('nav-menu');
    const newColor = generateRandomColor();
    
    colorContainer.style.backgroundColor = newColor.color;
    colorContainer.textContent = newColor.name; // Display RGB name
    
    // Update menu background color based on luminance
    navMenu.style.backgroundColor = newColor.color;
    
    const textColor = newColor.luminance > 0.5 ? 'black' : 'white'; // Choose text color based on background luminance
    colorContainer.style.color = textColor;
    navMenu.style.color = textColor; // Ensure menu text is visible
    
    const interval = Math.floor(Math.random() * 6 + 5) * 1000; // Random interval between 5-10 seconds
    setTimeout(changeColor, interval);
}

// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Function to set a random favicon
function setRandomFavicon() {
    const favicons = ['favicon1.ico', 'favicon2.ico'];
    const randomFavicon = favicons[Math.floor(Math.random() * favicons.length)];
    const faviconElement = document.getElementById('dynamic-favicon');
    faviconElement.href = randomFavicon;
}

// Add event listener to the navigation button
document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.getElementById('nav-button');
    if (navButton) {
        navButton.addEventListener('click', toggleMenu);
    }
    
    // Set a random favicon on page load
    setRandomFavicon();
});

// Initial call to start color cycling
changeColor();

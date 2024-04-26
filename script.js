// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Function to set a new background color every 5-10 seconds
function changeColor() {
    const colorContainer = document.getElementById('color-container');
    colorContainer.style.backgroundColor = generateRandomColor();
    const interval = Math.floor(Math.random() * 6 + 5) * 1000; // Random interval between 5-10 seconds
    setTimeout(changeColor, interval);
}

// Initial call to start color cycling
changeColor();

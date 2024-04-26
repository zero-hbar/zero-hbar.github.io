// Function to generate a random RGB color
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    const name = `ZER0_PIXEL: RGB(${r},${g},${b})`; // Include ZER0_PIXEL before RGB color name
    const luminance = calculateLuminance(color); // Calculate luminance for text color
    return {
        color: color,
        name: name,
        luminance: luminance
    };
}

// Function to set a new background color every 5-10 seconds
function changeColor() {
    const colorContainer = document.getElementById('color-container');
    const newColor = generateRandomColor();
    colorContainer.style.backgroundColor = newColor.color;
    colorContainer.textContent = newColor.name; // Display modified RGB name
    const textColor = newColor.luminance > 0.5 ? 'black' : 'white'; // Choose text color based on background luminance
    colorContainer.style.color = textColor;
    const interval = Math.floor(Math.random() * 6 + 5) * 1000; // Random interval between 5-10 seconds
    setTimeout(changeColor, interval);
}

// Initial call to start color cycling
changeColor();




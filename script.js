// Fetch and parse the colors.json file
fetch('colors.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load colors.json');
    }
    return response.json();
  })
  .then(data => {
    // Store the parsed JSON data in a variable named 'colors'
    const colors = data;

    // Now you can use the 'colors' variable to access the color names and hex values in your script
    // For example, you can use it in the generateRandomColor function to match the generated RGB color with the colors in the JSON data
  })
  .catch(error => {
    console.error('Error loading colors.json:', error);
  });

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

    // Find color name from JSON data
    const matchedColor = colors.find(c => c.hex.toUpperCase() === rgbToHex(r, g, b).toUpperCase());
    const name = matchedColor ? matchedColor.name : `Unknown`;

    return {
        color: color,
        name: name,
        luminance: calculateLuminance(color)
    };
}

// Function to convert RGB values to Hex string
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Function to set a new background color every 5-10 seconds
function changeColor() {
    const colorContainer = document.getElementById('color-container');
    const newColor = generateRandomColor();
    colorContainer.style.backgroundColor = newColor.color;
    colorContainer.textContent = `RGB: ${newColor.color} \n Color Name: ${newColor.name}`; // Display RGB name and color name
    const textColor = newColor.luminance > 0.5 ? 'black' : 'white'; // Choose text color based on background luminance
    colorContainer.style.color = textColor;
    const interval = Math.floor(Math.random() * 6 + 5) * 1000; // Random interval between 5-10 seconds
    setTimeout(changeColor, interval);
}

// Initial call to start color cycling
changeColor();

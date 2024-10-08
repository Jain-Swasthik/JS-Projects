Random Dark Background Color Changer

This project is a simple webpage that changes the background color to a random dark color from a predefined array each time a button is clicked. The hexadecimal value of the background color is also displayed on the screen.

Features
Changes the background color to a randomly selected dark color from a list.
Displays the hexadecimal value of the background color.
Uses event handling with addEventListener for button clicks.

Technologies
HTML
CSS
JavaScript
How It Works
Predefined Colors: An array of 10 dark color hex codes (darkColorsArr) is defined in the JavaScript file.

Random Selection: A function radomIndex() is used to generate a random index based on the length of the color array.

Event Handling: The button with the ID btn listens for a click event using addEventListener(). When clicked, the changeBackgroundColor() function is triggered.

Background Color Change: The changeBackgroundColor() function randomly selects a color from the array and applies it to the background of the page. The hexadecimal value of the selected color is also displayed inside the HTML element with the ID bg-hex-code.
// script.js

// Get form elements
let firstNameInput = document.getElementById("firstName");
let favoriteNumberInput = document.getElementById("favoriteNumber");


// Ask the user for their first name and store it in the variable Fname
let Fname = prompt("Please enter your first name:");
firstNameInput.value = Fname; // Assign the value to the input element

// Display a welcome message that contains the name they entered
alert("Welcome, " + Fname + "!");

// Create the constant piValue to store the value of Pi to 7 digits
const piValue = 3.1415926;

// Ask the user to input their favorite number and store the value in a variable myFavNum
let myFavNum = prompt("Please enter your favorite number:");
myFavNum = parseFloat(myFavNum); // Convert the input to a number
favoriteNumberInput.value = myFavNum; // Assign the value to the input element

// Calculate the area of a circle using the user's favorite number as the radius
// The formula to find the area of a circle is A = πr^2
let myArea = piValue * Math.pow(myFavNum, 2);

// Display the contents of each variable to the webpage
document.write("<p>Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. If that was the radius of a circle, the circle’s area would be " + myArea.toFixed(6) + ".</p>");
document.write("<p>Value of Pi used: " + piValue + "</p>");
document.write("<p>Your favorite number: " + myFavNum + "</p>");
document.write("<p>Calculated area of the circle: " + myArea.toFixed(6) + "</p>");


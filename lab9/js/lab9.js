// index.js - Working with your partner, experiment with DOM manipulation.
// Author: Nathan Lam
// Date: May 10, 2023

// find output and assign it to variable
var outputEl = document.getElementById("output");

// create new variable and assign to new variable
var new1El = document.createElement("p");

// attribute new1El to say something new
new1El.innerHTML = "This is my new Element 1. The font for this page is different than usual as you may see.";

// change html attribute of new2El to say something else
var new2El = document.createElement("p");
new2El.innerHTML = "This is my new Element 2. The text your are reading this on is pink with a dashed border.";

// append both elements to output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
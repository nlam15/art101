// index.js - Working with your partner, experiment with JS events.
// Author: Nathan Lam
// Date: May 15, 2023

function sortMe(str) {
	return str.split('').sort().join('');
}

var buttonEl = document.getElementById("my-button");
// event in the JS file that listens for a button click.
buttonEl.addEventListener("click", function(){
	console.log("Button pressed");
  // prompts user to input their name with prompt() function. 
  //var name = prompt("What is your name?");
  var name = document.getElementById("getit").value;
  var nameStr = "Hello, " + sortMe(name);
  // changes text from "Hello, World!" to "Hello + user name"
  var helloEl = document.getElementById("hello-world");
  helloEl.innerHTML = nameStr;
})
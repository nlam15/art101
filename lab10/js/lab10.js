// index.js - Working with your partner, experiment with JS events.
// Author: Nathan Lam
// Date: May 15, 2023

//name sorting function
function fixName(userName) {
  var nameArray = userName.split('');
  console.log("Your array name is: " + nameArray);
  var nameArraySort = nameArray.sort((a, b) => a.localeCompare(b));
  console.log("Your sorted array name is: " + nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("Your sorted name is: ", nameSorted);
  return nameSorted;
}

var button = document.getElementById("my-button");
button.addEventListener("click", function() {
  var inputValue = document.getElementById("user-name").value;
  var newName = fixName(inputValue);
  var output = document.getElementById("output");
  output.innerHTML = "Here is your new name: " + newName;
});

 
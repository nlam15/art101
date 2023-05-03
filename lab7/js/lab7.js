// index.js - Working with your partner, write functions that take user input and manipulate a string.
// Author: Nathan Lam <ndlam@ucsc.edu>
// Date: 3 May

// sortUserName takes user input and rearranges the letters
function sortUserName() {
    var userName = window.prompt("Hello. Please tell me your name so that I can fix it.");
    console.log("userName =", userName);
    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // array gets sorted
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // array gets joined back to the string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

document.writeln("Here is your new and corrected name. Enjoy!: ",
    sortUserName(), "</br>");
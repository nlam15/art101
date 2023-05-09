// index.js - Working with your partner, experiment with anonymous functions and callbacks.
// Author: Nathan Lam, Ichiro Sugimoto
// Date: May 8, 2023
// function that caclucates if numbers in the array are even and its sqaure root.
function isEven(x){
    return (x % 2 ==0);
}
// test function
console.log("Is 6 even?", isEven(6));
console.log("Is 15 even?", isEven(15));

array = [64, 16, 36, 121, 25, 529]
console.log("My array", array);

var result = array.map(isEven);
// should print whether numbers in the array or true to being even
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return (x ** 0.5);
})
// should print numbers in array's square root
console.log("Squareroot of array:", result);
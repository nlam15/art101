// index.js - Experiment with JavaScript arrays and objects
// Author: Nathan Lam <ndlam@ucsc.edu>
// Date: 1 May

// Define Variables
myTransport = ["Toyota Prius", "rides from Jackson", "metro"]

// create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Prius",
  color: "Winter Metallic Gray",
  year: 2012,
  age: function() {
    return 2023 - this.year;
  }
}

// output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
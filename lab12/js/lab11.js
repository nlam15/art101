// index.js - Working with your partner, experiment with jQuery.
// Author: Nathan Lam
// Date: May 17, 2023

$("button.red").click(function(){
  $("#target").removeClass("green");
	$("#target").toggleClass("red")
});
$("button.green").click(function(){
  $("#target").removeClass("red");
	$("#target").toggleClass("green");
});

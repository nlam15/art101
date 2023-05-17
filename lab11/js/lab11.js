// index.js - Working with your partner, experiment with jQuery.
// Author: Nathan Lam
// Date: May 17, 2023

$("#challenge").append("<button id='c-button'>Button</button>");
$("#problem").append("<button id='p-button'>Button</button>");
$("#results").append("<button id='r-button'>Button</button>");

$("#c-button").click(function(){
    $(this).text("experiment with jQuery.");
    $(this).css('color', 'green');
    $(this).parent().css({"color": "green"});
    $(this).toggleClass("special");
});

$("#p-button").click(function(){
  $(this).text("My button would fail to produce the right color at times so it took a while to trouble shoot that. Now you are reading this on a newly improved button!");
  $(this).css('color', 'blue');
  $(this).parent().css({"color": "blue"});
  $(this).toggleClass("special");
});

$("#r-button").click(function(){
  $(this).text("as well as our button!");
  $(this).css('color', 'pink');
  $(this).parent().css({"color": "pink"});
  $(this).toggleClass("special");
});

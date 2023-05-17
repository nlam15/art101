$("button.red").click(function(){
    $("#target").removeClass("green");
      $("#target").toggleClass("red")
  });
  $("button.green").click(function(){
    $("#target").removeClass("red");
      $("#target").toggleClass("green");
  });

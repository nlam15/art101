function getStuff() {
	console.log("Clicked!");
  $.ajax({
    url: "https://yesno.wtf//api",
    type: "GET",
    data: {},
  })
  .done(function(data) {
 		// console.log(data);
    console.log(data);
    var answer = data.answer;
    var imgURL = data.image;
    $("#output").html("<h2>" + answer);
    $("#output").append("<img src=" + imgURL + ">");
  })
}

$("button").click(getStuff);
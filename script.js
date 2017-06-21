//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// It has the computer run what is in the function after the html page loads all the way. 
$(document).ready(function(){
  // your code goes below
  console.log("the page has loaded")
  $(".word").fadeTo(0,.2);
  $("#word-2").fadeTo(0,1);
  $("#word-6").fadeTo(0,1);
  $("#word-7").fadeTo(0,1);
  $("#word-16").fadeTo(0,1);
  $("#word-2").show();
  $("#word-6").show();
  $("#word-7").show();
  $("#word-16").show();
  $("#word-2").css("color","#FCFF33");
  $("#word-6").css("color","#FCFF33");
  $("#word-7").css("color","#FCFF33");
  $("#word-16").css("color","#FCFF33");
  $("#word-2").fadeOut("slow");
  $("#word-6").fadeOut("slow");
  $("#word-7").fadeOut("slow");
  $("#word-16").fadeOut("slow");
  $("#word-2").delay(2500);
  $("#word-6").delay(2500);
  $("#word-7").delay(2500);
  $("#word-16").delay(2500);
  $("#word-2").fadeIn("slow");
  $("#word-6").fadeIn("slow");
  $("#word-7").fadeIn("slow");
  $("#word-16").fadeIn("slow");
})
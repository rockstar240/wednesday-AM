//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// It makes jQuery be in the document and tells us that the following is in jQuery
// 
$(document).ready(function(){
  console.log("The page has loaded!");
  $(".word").hide();
  $("#dudes").hide();
  $("div").css("color", "blue");
  $(".useful").fadeIn(1500);
  $("#to").fadeTo(1500,0.2);
  setTimeout(function() {
    $("#dudes").fadeIn(100);
    $("")
  }, 5000);
})
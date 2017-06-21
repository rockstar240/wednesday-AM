//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// 
$(document).ready(function(){
console.log("page is loaded");
 var b = $(":button")
  $(".one").click(function() {
    $(".word").fadeOut();
    $(".smart").fadeIn();
    $(".smart").css("color", "#ff0000");
  })
  $(".two").click(function() {
    $(".word").fadeOut();
    $(".code").fadeIn();
    $(".code").css("color", "#32CD32");
  })
  $(".three").click(function() {
    location.reload(true);
  })


// your code goes below
})
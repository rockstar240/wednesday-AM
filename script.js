//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// 
$(document).ready(function(){
console.log("page is loaded");
 var b = $(":button")
  $(".one").click(function() {
    $(".word").fadeOut();
    $(".smart").fadeIn();
    $(".smart").addClass("animated wobble");
    setTimeout(function() { 
    $(".smart").removeClass("animated wobble");
    $(".smart").css("color", "#ff0000");
    $(".smart").addClass("infinite animated bounce");
    },3000);
      
  })
  $(".two").click(function() {
    $(".word").fadeOut();
    $(".code").fadeIn();
    $(".code").css("color", "#32CD32");
    $(".code").addClass("animated bounce")
    $(".code").delay(800)
    $(".code").addClass("infinite animated pulse")
  })
  $(".three").click(function() {
    location.reload(true);
    
  })


// your code goes below
})
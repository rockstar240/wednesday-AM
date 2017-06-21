//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// it ummm... waits until the html/css is loaded to run the code in the curly brackets
$(document).ready(function(){
//$ your code goes below
  $(".home").show()
  console.log("page is loaded")
  $(".home").hide()
  $(".u-are-smart").show()
  $(".u-are-smart").hide()
  $(".we-love").show()
  $(".e").css("color", "blue")
  $("we-love").fadeIn()
})
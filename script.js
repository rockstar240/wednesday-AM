//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// it doesnt do anything till everything is loaded
$(document).ready(function(){ console.log("Page is loaded")
//$(".word").hide()
$("#word-2").show()
$("#word-6").show()
$("#word-16").show()
setInterval(function(){

$("body").css("background", "#"+((1<<24)*Math.random()|0).toString(16))


}, 1000);
$("header").css("background-color", "blue");
// your code goes below
$(".word").fadeTo("slow", .2 )
$("#word-2").fadeTo("slow", 1)
$("#word-6").fadeTo("slow", 1)
$("#word-16").fadeTo("slow", 1)
})
//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// The line allows the page to load and get ready for the javascript/jquery.
$(document).ready(function(){
// your code goes below
  console.log("page is loaded");
  var shownWords = "#WE, #LOVE, #TO, #CODE, h1"
  var fadedWords = $(".word").not(shownWords);
  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  $(fadedWords).fadeTo(800, 0.2);
  var fadingVar = function fading(){
    $(shownWords).fadeOut(2000, "linear");
    $(shownWords).fadeIn(2000, "linear");
  }
  setInterval(fadingVar, 0);
  $(shownWords).css("color", random_color);
})
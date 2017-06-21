//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// this makes whatever you put within the curly brackets run whenever the page has loaded
$(document).ready(function(){
// your code goes below
  console.log("page is loaded");

  //This is for the "YOU ARE SO SMART" step
/*
  $(".step2").hide()
  $(".random").hide()
*/

  //This step is for the "WE LOVE TO CODE" step"
/*
  $(".step1").hide()
  $(".random").hide()
*/

  $(".step1").css({"color":"red"});
  $(".step2").css({"color":"blue"});
  $(".random").css({"color":"purple"});
  $(".step1, .step2, .step3, .random").hide()
  for(a = 0; a < 11; a++ ){

      $(".step1").fadeIn(1000)
    
    setTimeout(function(){
      $(".step1").fadeOut(1000)}, 1000);
    
    setTimeout(function(){
      $(".step2").fadeIn(1000)}, 2000);

    setTimeout(function(){
      $(".step2").fadeOut(1000)}, 3000);
    
    setTimeout(function(){
      $(".step3").fadeIn(1000)}, 4000);
    
    setTimeout(function(){
      $(".step3").fadeOut(1000)}, 5000);
  }
})
//What does the line $(document).ready(function(){ do? Write your answer as a comment below
// 
$(document).ready(function(){
  console.log("Page is Loaded");
//     $("#word-2").hide();
//     $("#word-4").hide();
//     $("#word-5").hide();
//     $("#word-6").hide();
//     $("#word-7").hide();
//     $("#word-8").hide();
//     $("#word-9").hide();
//     $("#word-10").hide();
//     $("#word-11").hide();
//     $("#word-12").hide();
//     $("#word-13").hide();
//     $("#word-15").hide();
//     $("#word-16").hide();
// // This is how to create the words You are Smart.
//       $("#word-1").hide();
//       $("#word-3").hide();
//       $("#word-4").hide();
//       $("#word-5").hide();
//       $("#word-14").hide();
//       $("#word-8").hide();
//       $("#word-9").hide();
//       $("#word-10").hide();
//       $("#word-11").hide();
//       $("#word-12").hide();
//       $("#word-13").hide();
//       $("#word-15").hide();
// This is how to say We Love To Code
      $("#word-1").hide();
      $("#word-2").hide();
      $("#word-3").hide();
      $("#word-4").hide();
      $("#word-5").hide();
      $("#word-6").hide();
      $("#word-7").hide();
      $("#word-9").hide();
      $("#word-10").hide();
      $("#word-12").hide();
      $("#word-13").hide();
      $("#word-14").hide();
      $("#word-15").hide();
      $("#word-16").hide();
      $("#bebe").hide();
      $("#Header").hide();
for (z=0; z<11; z++){
console.log(z)
$("#Header").fadeIn(1000).delay(1000).fadeOut(1000);
}
    $("button").click(function(){
      $("#foodstuff").toggle();
    })

})

$(document).ready(function(){

  function toggleFun (showElementId, hideElementId){
    $(showElementId).click(function() {
      $(showElementId).slideToggle();
      $(hideElementId).slideToggle();
     });
  }
// row 1  
/*studio apartment toggle function*/
  toggleFun("#haoA", "#pA");
  toggleFun("#pA", "#haoA");
/*studio apartment sitting room description toggle function*/
  toggleFun("#hao1", "#p1");
  toggleFun("#p1", "#hao1");
/*studio apartment kitchen description toggle function*/
  toggleFun("#hao2", "#p2");
  toggleFun("#p2", "#hao2");
/*studio apartment bedroom description toggle function*/
  toggleFun("#hao3", "#p3");
  toggleFun("#p3", "#hao3");
// row 2  
/*studio apartment row two toggle function*/
  toggleFun("#haoB", "#pB");
  toggleFun("#pB", "#haoB"); 
/*studio apartment sitting room description row two toggle function */
  toggleFun("#hao4", "#p4");
  toggleFun("#p4", "#hao4"); 
/*studio apartment kitchen description row two toggle function */
  toggleFun("#hao5", "#p5");
  toggleFun("#p5", "#hao5");
/*studio apartment bed room description row two toggle function */
  toggleFun("#hao6", "#p6");
  toggleFun("#p6", "#hao6"); 
// row 3
/*1 bedroom apartment toggle function*/  
  toggleFun("#haoAA", "#pAA");
  toggleFun("#pAA", "#haoAA");
 /*1 bedroom apartment sitting room toggle function*/ 
  toggleFun("#hao1a", "#p1a");
 toggleFun("#p1a", "#hao1a");

    $("#haoBB").click(function() {
      $("#haoBB").slideToggle();
      $("#pBB").slideToggle();
    });

    $("#pBB").click(function() {
      $("#pBB").slideToggle();
      $("#haoBB").slideToggle();
    }); 
 // 2 bedroom apartment
 
   

});


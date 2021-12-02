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
  /*1 bedroom apartment kitchen toggle function*/ 
  toggleFun("#hao2a", "#p2a");
  toggleFun("#p2a", "#hao2a");
   /*1 bedroom apartment bedroom room toggle function*/ 
   toggleFun("#hao3a", "#p3a");
   toggleFun("#p3a", "#hao3a");
// row 4
   /*1 bedroom apartment bedroom room toggle function*/  
   toggleFun("#haoBB", "#pBB");
   toggleFun("#pBB", "#haoBB");
/*1 bedroom apartment sitting room toggle function*/ 
   toggleFun("#hao4a", "#p4a");
   toggleFun("#p4a", "#hao4a");  
/*1 bedroom apartment kitchen toggle function*/ 
  toggleFun("#hao5a", "#p5a");
  toggleFun("#p5a", "#hao5a");
/*1 bedroom apartment bedroom room toggle function*/ 
   toggleFun("#hao6a", "#p6a");
   toggleFun("#p6a", "#hao6a");

});


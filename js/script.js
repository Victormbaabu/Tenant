$(document).ready(function(){

  function toggleFun (showElementId, hideElementId){
    $(showElementId).click(function() {
      $(showElementId).slideToggle();
      $(hideElementId).slideToggle();
     });
  }
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
/*studio apartment row two toggle function*/
toggleFun("#haoB", "#pB");
toggleFun("#pB", "#haoB"); 
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

   

});


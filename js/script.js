$(document).ready(function(){
    $("#haoA").click(function() {
      $("#haoA").slideToggle();
      $("#pA").slideToggle();
     });

    $("#pA").click(function() {
      $("#pA").slideToggle();
      $("#haoA").slideToggle();
    }); 


    $("#haoB").click(function() {
        $("#haoB").slideToggle();
        $("#pB").slideToggle();
        });

     $("#pB").click(function() {
        $("#pB").slideToggle();
        $("#haoB").slideToggle();
     });

    
     $("#haoAA").click(function() {
      $("#haoAA").slideToggle();
      $("#pAA").slideToggle();
    });

    $("#pAA").click(function() {
      $("#pAA").slideToggle();
      $("#haoAA").slideToggle();
    }); 
    
    $("#haoBB").click(function() {
      $("#haoBB").slideToggle();
      $("#pBB").slideToggle();
    });

    $("#pBB").click(function() {
      $("#pBB").slideToggle();
      $("#haoBB").slideToggle();
    }); 

});


$(document).ready(function(){
    $("#hao").click(function() {
        $("#hao").slideToggle();
        $("#p1").slideToggle();
      });

      $("#p1").click(function() {
        $("#p1").slideToggle();
        $("#hao").slideToggle();
      });

});
$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });

  // Form validation
  $("#signupbutton").click(function() {
    if($("#firstname").val()=="" || $("#lastname").val()=="" || $("#email").val()==""){
      $("#firstname").addClass("error");
      if($("#lastname").val()=="" && $("#firstname").val()!="" && $("#email").val()!=""){
        $("#lastname").addClass("error");
        $("#firstname").removeClass("error");
        $("#email").removeClass("error");

      }
      if($("#email").val()=="" && $("#firstname").val()!="" && $("#lastname").val()!=""){
      $("#email").addClass("error");
      $("#firstname").removeClass("error");
      $("#lastname").removeClass("error");

      }
      if($("#email").val()=="" && $("#lastname").val()=="" && $("#firstname").val()!=""){
        $("#email").addClass("error");
        $("#firstname").removeClass("error");
        $("#lastname").addClass("error");
  
        }
      if($("#email").val()=="" && $("#firstname").val()=="" && $("#lastname").val()==""){
          $("#email").addClass("error");
          $("#firstname").addClass("error");
          $("#lastname").addClass("error");
    
          }
      alert("Please fill in required informatiom")
   
      return;

    } 
    
    else {
      $("#firstname").removeClass("error");
      $("#lastname").removeClass("error");
      $("#email").removeClass("error");
    }

  

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
    $("#firstname").val("");
    $("#firstname").val("");
    $("middleinitial").val("");
    $("#lastname").val("");
    $("#email").val("");
  });
});



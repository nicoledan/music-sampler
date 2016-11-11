$(document).ready(function(){

  $("#review").hide();

$("#bigImage").click(function() {
    $("#review").slideToggle();
});


function hideAll(){
  $("#firstSong").hide();
  $("#secondSong").hide();
  $("#thirdSong").hide();
  $("#fourthSong").hide();
}

hideAll();

$(".covers").click(function(){
  hideAll();
  switch ($(this).attr("id")){
    case "dangerouslyInLoveCover":
      $("#firstSong").show();
      break;
    case "4cover":
      $("#secondSong").show();
      break;
    case "beyonceCover":
      $("#thirdSong").show();
      break;
    case "lemonadeCover":
      $("#fourthSong").show();
      break;
    }
});

})

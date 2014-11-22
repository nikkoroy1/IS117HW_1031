$(document).ready(function() {
  $( "#main_content" ).css("background-color", "red");
  $( "#branding img" ).click(function() {
     $( "#main_content" ).animate({
       opacity: 0.25,
       left: "+=50",
       height: "toggle"
       }, 5000, function() {
     });// animation complete
  });//end click
});//end ready

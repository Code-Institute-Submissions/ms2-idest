//Listener
//var submitForm = document.getElementById('submit-form').addEventListener('click', submitOk);

//function submitOk () {
   // alert("Thank you!\nWe look forward to dicussing your next city adventure.");
    
//}

$(document).ready(function() {

$('#submit-form').click(function() {
    $('.modal').css("display", "block");
});
$('.close-cross').click(function() {
  $('.modal').css("display", "none");
});
$('#close').click(function() {
  $('.modal').css("display", "none");
});
});
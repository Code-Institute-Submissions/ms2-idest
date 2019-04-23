$(document).ready(function() {

//Display modal when the submit botton on the booking form is clicked
$('#submit-form').click(function() {
    $('.modal').css("display", "block");
});

//Hide the modal when the x is clicked
$('.close-cross').click(function() {
  $('.modal').css("display", "none");
});

//Hide the modal when the close button is clicked
$('#close').click(function() {
  $('.modal').css("display", "none");
});

//Close when the user clicks anywhere outside the modal
var modal = document.getElementById('myModal');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
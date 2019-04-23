$(document).ready(function() {
  
//Variables
var valName = $('#name'),
    valEmail = $('#email'),
    valEmailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    valTelephone = $('#telephone'),
    valTelephoneFormat = /^\d{10}$/;

//Name input validation


//Display modal when the submit botton on the booking form is clicked
$('#submit-form').click(function(event) {
    event.preventDefault();
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
//Function to sent email. If successful display modal with thank you message.
//If the email fails console.log error.

function sendEmail (formDetails) {
    emailjs.send ("ant_cole909_gmail_com", "template_cN4Hm3Z3", {
      "from_name": formDetails.fromName.value,
      "from_email": formDetails.emailAddress.value,
      "telephone": formDetails.telephone.value,
      "poi": formDetails.poi.value,
      "message": formDetails.message.value
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      restForm();
      var modal = document.getElementById('myModal');
      var closeCross = document.getElementsByClassName("close-cross")[0];
      var closeBtn  = document.getElementById('close');
      
      modal.style.display = "block";
    
      //Hide the modal when the x is clicked
      closeCross.onclick = function() {
        modal.style.display = "none";
      };
      //Hide the modal when the close button is clicked
      closeBtn.onclick = function() {
        modal.style.display = "none";
      };
      //Close when the user clicks anywhere outside the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    
    }, 
    function (error) {
        console.log('FAILED...', error);
      }
    );
    return false;
  }

function resetForm() {
  document.getElementById("booking-form").reset();
}





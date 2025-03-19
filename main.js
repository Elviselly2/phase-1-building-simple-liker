// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add the hidden class to the error modal by default
const errorModal = document.getElementById("modal");
errorModal.classList.add("hidden");

// Grab all the heart elements
const hearts = document.querySelectorAll(".like-glyph");

// Handle heart clicks
hearts.forEach(heart => {
  heart.addEventListener("click", () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === "♡") {
          // Change empty heart to full heart
          heart.textContent = "♥";
          heart.classList.add("activated-heart");
        } else {
          // Change full heart to empty heart
          heart.textContent = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch(error => {
        // Show error modal and display the message
        errorModal.classList.remove("hidden");
        const modalMessage = document.getElementById("modal-message");
        modalMessage.textContent = error;

        // Hide modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

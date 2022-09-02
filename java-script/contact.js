var emailInput = document.getElementById("emailInput");
emailInput.addEventListener("blur", invalidFunction);

function invalidFunction() {
  if (emailInput.value == "" || emailInput.checkValidity() != true) {
    emailInput.classList.add("invalidInput");
  } else {
    emailInput.classList.remove("invalidInput");
    emailInput.style.width = "100%";
  }
}
var messageInput = document.getElementById("messageArea");
messageInput.addEventListener("blur", invalidFunctionMessage);

function invalidFunctionMessage() {
  if (messageInput.value == "" || messageInput.checkValidity() != true) {
    messageInput.classList.add("invalidInput");
  } else {
    messageInput.classList.remove("invalidInput");
  }
}
var submitButton = document.getElementById("submitButton");
var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("change", function () {
  if (contactForm.checkValidity() != true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

AOS.init();

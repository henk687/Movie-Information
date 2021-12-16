const form = document.getElementById('form');
const nameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const inputs = [nameInput, emailInput, subjectInput, messageInput]

let isFormValid = false;
let isValidationOn = false;

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const resetElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid")
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }

    if (!subjectInput.value) {
        isFormValid = false;
        invalidateElm(subjectInput);
    }

    if (!messageInput.value) {
        isFormValid = false;
        invalidateElm(messageInput);
    }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
      sendMail();
      document.querySelector(".contact-btn").innerHTML = "Thank you";
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
      validateInputs();
  });
});

const sendMail = () => {
  var tempParams = {
      username:document.getElementById("username").value,
      email:document.getElementById("email").value,
      subject:document.getElementById("subject").value,
      message:document.getElementById("message").value
  };

  emailjs.send('service_h01u2le', 'template_k8v4nhw', tempParams)
  .then(function(res){
      console.log("succes", res.status);
  })
};
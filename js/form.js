const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();

  sendMail();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if(usernameValue === '') {
    setError(username, 'Name is required');
  } else {
    setSuccess(username)
  }

  if(emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address')
  } else {
    setSuccess(email)
  }

  if(subjectValue === '') {
    setError(subject, 'Subject is required');
  } else {
    setSuccess(subject)
  }

  if(messageValue === '') {
    setError(message, 'Message is required');
  } else {
    setSuccess(message)
  }
}

// Send Mail 

function sendMail(params) {
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

  document.getElementById("submit-button").innerHTML = "Thank you";
};
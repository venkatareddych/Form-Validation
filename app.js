//form validation

let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('submit',function(event){
  event.preventDefault(); //stops auto form submission
    if(validateForm()){
      alert('Registration Successful')
    }
});

let validateForm = () => {
return (checkUserName() & checkEmail() & checkPassword() & checkConfirmPassword()) 
};

let checkUserName = () => {
  let input = document.querySelector('#username');
  let inputFeedback = document.querySelector('#user-feedback');
  let regX = /^[a-zA-Z0-9]{4,15}$/;
  if(regX.test(input.value)){
    makeValid(input, inputFeedback);
    return true;
  }
else{
  makeInValid(input, inputFeedback);
  return false;
}
};


let checkEmail = () => {
  let input = document.querySelector('#email');
  let inputFeedback = document.querySelector('#email-feedback');
  let regX = /^([\w\.-]+)@([\w\-]+).([a-z]{2,8})(.[a-z]{2,8})$/;
  if(regX.test(input.value)){
    makeValid(input, inputFeedback);
    return true;
  }
else{
  makeInValid(input, inputFeedback);
  return false;
}
};


let checkPassword = () => {
  let input = document.querySelector('#pass');
  let inputFeedback = document.querySelector('#pass-feedback');
  let regX = /^([a-zA-Z0-9]){6,12}$/;
  if(regX.test(input.value)) {
    makeValid(input, inputFeedback);
    return true;
  }
else{
  makeInValid(input,inputFeedback);
  return false;
}
}


let checkConfirmPassword = () => {
  let input = document.querySelector('#c-pass');
  let passwordEl = document.querySelector('#pass');
  let inputFeedback = document.querySelector('#c-pass-feedback');
  let regX = /^([a-zA-Z0-9]){6,12}$/;
  if(regX.test(input.value) && input.value === passwordEl.value) {
    makeValid(input, inputFeedback);
    return true;
  }
else{
  makeInValid(input,inputFeedback);
  return false;
}
}

//makeValid

var makeValid = (input,inputFeedback) => {
   input.classList.add('is-form-valid');
   input.classList.remove('is-form-invalid');
   inputFeedback.classList.add('text-success');
   inputFeedback.classList.remove('text-danger');
   inputFeedback.innerText = 'strong';
};

//makeInValid

var makeInValid = (input,inputFeedback) => {
   input.classList.remove('is-form-valid');
   input.classList.add('is-form-invalid');
   inputFeedback.classList.remove('text-success');
   inputFeedback.classList.add('text-danger');
   inputFeedback.innerText = `please enter a ${input.placeholder}`;
};

//username field with key up event

let usernameEl = document.querySelector('#username');
usernameEl.addEventListener('keyup',function(){
  checkUserName();
});

let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup',function(){
  checkEmail();
});

let passwordEl = document.querySelector('#pass');
passwordEl.addEventListener('keyup',function(){
  checkPassword();
});

let cPasswordEl = document.querySelector('#c-pass');
cPasswordEl.addEventListener('keyup',function(){
  checkConfirmPassword();
});
const form = document.querySelector("#login-form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");
//
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(inputName.value,inputEmail.value,inputPhone.value,inputDate.value,inputTime.value)
  
}

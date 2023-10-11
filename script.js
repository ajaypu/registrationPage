const form = document.querySelector("#login-form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputDate = document.querySelector("#date");
const inputTime = document.querySelector("#time");

const obj = {
  name,
  email,
  phone,
};
//
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  obj.name = inputName.value;
  obj.email = inputEmail.value;
  obj.phone = inputPhone.value;
  localStorage.setItem(obj.email, JSON.stringify(obj));
}

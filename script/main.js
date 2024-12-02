let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let eMassege = document.getElementById("eMassege");

function validateEmail() {
  let Reg = /^[A-Z]?(\w|\.){1,}\@gmail.com$/;
  if (Reg.test(email.value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    eMassege.classList.add("d-none");
    return true;
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    eMassege.classList.remove("d-none");
    return false;
  }
}

function validatePassword() {
  let Reg = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/;
  if (Reg.test(password.value)) {
    btn.removeAttribute("disabled");
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    return true;
  } else {
    btn.setAttribute("disabled", "true");
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
    return false;
  }
}

btn.addEventListener("click", function () {
  if (validateEmail() && validatePassword()) {
    document.location = "home.html";
  }
});

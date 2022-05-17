const openBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close");
const header = document.querySelector(".header");
const errorDiv = document.querySelector("#error-display");
const userInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const telephoneInput = document.querySelector("#telephone");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const passwordToggler1 = document.querySelector("#password-toggler-1");
const passwordToggler2 = document.querySelector("#password-toggler-2");
const selectEl = document.querySelector("#gender");
const submitBtn = document.querySelector("#submit");

let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let usernameFormat = /^[A-Za-z0-9\s]+$/;
let phoneNumberFormat = /^\+(?:[0-9] ?){6,14}[0-9]$/;

openBtn.addEventListener("click", () => {
  header.classList.add("clicked");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("clicked");
});

passwordToggler1.addEventListener("click", (e) => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  passwordToggler1.classList.toggle("fa-eye-slash");
});

passwordToggler2.addEventListener("click", (e) => {
  const type =
    confirmPasswordInput.getAttribute("type") === "password"
      ? "text"
      : "password";
  confirmPasswordInput.setAttribute("type", type);
  passwordToggler2.classList.toggle("fa-eye-slash");
});

submitBtn.addEventListener("click", () => {
  validate();
});

function validate() {
  if (
    userInput.value === "" &&
    emailInput.value === "" &&
    telephoneInput.value === ""
  ) {
    errorDiv.innerText = "Empty fields!";
    errorDiv.classList.add("error");
  } else if (userInput.value === "") {
    errorDiv.innerText = "Username field is required!";
    errorDiv.classList.add("error");
  } else if (emailInput.value === "") {
    errorDiv.innerText = "Email field is required!";
    errorDiv.classList.add("error");
  } else if (telephoneInput.value === "") {
    errorDiv.innerText = "Telephone field is required!";
    errorDiv.classList.add("error");
  } else if (passwordInput.value === "") {
    errorDiv.innerText = "Password field is required!";
    errorDiv.classList.add("error");
  } else if (confirmPasswordInput.value === "") {
    errorDiv.innerText = "Confirm Password field is required!";
    errorDiv.classList.add("error");
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    errorDiv.innerText = "Passwords does not match!";
    errorDiv.classList.add("error");
  } else if (selectEl.value === "default") {
    errorDiv.innerText = "Please select a gender!";
    errorDiv.classList.add("error");
  } else if (!emailInput.value.match(mailFormat)) {
    errorDiv.innerText = "Invalid email address!";
    errorDiv.classList.add("error");
  } else if (!userInput.value.match(usernameFormat)) {
    errorDiv.innerText = "Invalid username!";
    errorDiv.classList.add("error");
  } else if (!telephoneInput.value.match(phoneNumberFormat)) {
    errorDiv.innerText = "Invalid phone number!";
    errorDiv.classList.add("error");
  } else {
    errorDiv.innerText = "Successful! Thanks for reaching out!";
    errorDiv.classList.add("success");
  }
}

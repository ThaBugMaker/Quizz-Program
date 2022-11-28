const name = document.getElementById("username");
const password = document.getElementById("password");
let forgetPassword = document.getElementById("passRec");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

forgetPassword.addEventListener("click", () => {
  alert("THIS LINK IS NOT ENABLED YET!");
});

form.addEventListener("submit", (e) => {
  let messages = [];
  if (name.value === "username") {
    messages.push(`Username cannot be 'username'`);
  }

  if (name.value.length <= 5) {
    messages.push("Username must be 6 characters or longer");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }
  if (password.value.length >= 18) {
    messages.push("Password must be less than 18 characters");
  }
  if (password.value === "password") {
    messages.push(`Password cannot be 'password'`);
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(`,\n`);
  }
});

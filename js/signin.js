var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var incorrect = document.getElementById("incorrect");
var signinButton = document.getElementById("signinButton");
var incorrect = document.getElementById("incorrect");
var loggedInUser;

// Validate email field
signinEmail.addEventListener("input", function (e) {
  var email = e.target.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }
});

// Validate password field
signinPassword.addEventListener("input", function (e) {
  var password = e.target.value;
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passwordRegex.test(password)) {
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }
});

// Signin function
function signin() {
  var signupUsers = JSON.parse(localStorage.getItem("signupUsers"));
  var user = {
    email: signinEmail.value,
    password: signinPassword.value,
  };

  signinEmail.classList.remove("is-valid");
  signinPassword.classList.remove("is-valid");
  signinEmail.value = "";
  signinPassword.value = "";

  var userExist = signupUsers.find(function (u) {
    return u.email === user.email && u.password === user.password;
  });
  if (userExist) {
    localStorage.setItem("loggedInUser", JSON.stringify(userExist.name));
    window.location.href = "home.html";
  } else {
    incorrect.innerText = "Invalid email or password. Please try again.";
    incorrect.classList.add("text-danger");
  }
}

// Enable the signin button when all fields are valid
signinButton.addEventListener("click", function (e) {
  if (
    signinEmail.classList.contains("is-valid") &&
    signinPassword.classList.contains("is-valid")
  ) {
    signin();
  } else {
    incorrect.innerText =
      "All fields are required and must meet the requirements.";
    incorrect.classList.add("text-danger");
  }
});
0;

var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupButton = document.getElementById("signupButton");
var exist = document.getElementById("exist");
var signupUsers = [];

if (localStorage.getItem("signupUsers") === null) {
  signupUsers = [];
} else {
  signupUsers = JSON.parse(localStorage.getItem("signupUsers"));
}

// Validate name field
signupName.addEventListener("input", function (e) {
  var name = e.target.value;
  var nameRegex = /^[a-zA-Z\s]+$/;

  if (name.length < 2 || !nameRegex.test(name)) {
    this.classList.add("is-invalid");
  } else {
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  }
});

// Validate email field
signupEmail.addEventListener("input", function (e) {
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
signupPassword.addEventListener("input", function (e) {
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

// Signup function
function signup() {
  // Create user object
  var user = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };
  for (var i = 0; i < signupUsers.length; i++) {
    if (signupUsers[i].email === user.email) {
      exist.innerText = "Email already exist!";
      exist.classList.add("text-danger");
      return;
    }
  }
  signupUsers.push(user);
  localStorage.setItem("signupUsers", JSON.stringify(signupUsers));
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
  exist.innerText = "Signup successful!";
  exist.classList.add("text-success");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

// Enable the signup button when all fields are valid
signupButton.addEventListener("click", function (e) {
  if (
    signupName.classList.contains("is-valid") &&
    signupEmail.classList.contains("is-valid") &&
    signupPassword.classList.contains("is-valid")
  ) {
    signup();
  } else {
    exist.innerText = "All fields are required and must meet the requirements.";
    exist.classList.add("text-danger");
  }
});

var logoutButton = document.querySelector(".nav-link");
var username = document.getElementById("username");

username.innerText =
  "Welcome" + " " + JSON.parse(localStorage.getItem("loggedInUser"));

logoutButton.addEventListener("click", function (e) {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
});

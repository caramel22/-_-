
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Perform basic username and password validation
  if (username === "admin" && password === "password") {
    // Hide login page and show home page
    document.querySelector(".container").style.display = "none";
    document.querySelector(".home-page").style.display = "block";
  } else {
    alert("Invalid username or password");
  }
}

function logout() {
  // Show login page and hide home page
  document.querySelector(".container").style.display = "block";
  document.querySelector(".home-page").style.display = "none";
}
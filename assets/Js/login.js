// Login-form logics

// Function to show the login form
function showLoginForm() {
  var loginOverlay = document.getElementById("login-overlay");
  loginOverlay.style.display = "block";
  document.documentElement.style.overflow = "hidden"; // Disable body scroll
  document.body.style.overflow = "hidden";
}

// Function to close the login form
function closeLoginForm() {
  var loginOverlay = document.getElementById("login-overlay");
  loginOverlay.style.display = "none";
  document.documentElement.style.overflow = "auto"; // Enable body scroll
  document.body.style.overflow = "auto";
}

document.getElementById("login-icon").addEventListener("click", function() {
  showLoginForm();
});

document.getElementById("login-overlay").addEventListener("click", function(event) {
  if (event.target === this || event.target.classList.contains("times")) {
    closeLoginForm();
  }
});

document.addEventListener("click", function(event) {
  if (!event.target.closest("#login-overlay") && !event.target.matches("#login-icon")) {
    closeLoginForm();
  }
});

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");

function checkLoginInputs() {
  if (emailInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
    loginButton.classList.remove("disabled");
    loginButton.disabled = false;
  } else {
    loginButton.classList.add("disabled");
    loginButton.disabled = true;
  }
}

emailInput.addEventListener("input", checkLoginInputs);
passwordInput.addEventListener("input", checkLoginInputs);

const emailLabel = document.getElementById("email-input");
const passwordLabel = document.getElementById("password-input");

function toggleLabel(event) {
  const input = event.target;
  const label = input.previousElementSibling;

  if (input.value.trim() !== "") {
    label.classList.add("active");
  } else {
    label.classList.remove("active");
  }
}

emailLabel.addEventListener("input", toggleLabel);
passwordLabel.addEventListener("input", toggleLabel);

// Password hide or show logic here...

const passwordHide = document.getElementById("password-input");
const eyeIcon = document.getElementById("eye-icon");

eyeIcon.addEventListener("click", function() {
  if (passwordHide.getAttribute("type") === "password") {
    passwordHide.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwordHide.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
});

const LemailInput = document.getElementById("email-input");
const LpasswordInput = document.getElementById("password-input");
const LloginButton = document.getElementById("login-button");

LloginButton.addEventListener("click", function(event) {
  event.preventDefault();
  const email = LemailInput.value.trim();
  const password = LpasswordInput.value.trim();
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (!validateEmail(email)) {
    displayLoginError("Please enter a valid email address.");
  } else if (user) {
    displayLoginError("");
    alert("Login successful!");
    handleSuccessfulLogin(user.firstName);
    updateSessionData(user);
  } else {
    displayLoginError("The email and/or password you entered is incorrect. Please try again.");
  }
});

function updateSessionData(user) {
  const sessionData = {
    username: user.firstName,
    isLoggedIn: true
  };
  localStorage.setItem("sessionData", JSON.stringify(sessionData));
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayLoginError(errorMessage) {
  const loginErrorContainer = document.getElementById("login-error");
  loginErrorContainer.textContent = errorMessage;

  if (errorMessage) {
    loginErrorContainer.style.color = "red";
    loginErrorContainer.style.display = "block";
  } else {
    loginErrorContainer.style.display = "none";
  }
}

var isLoggedIn = false;

function handleSuccessfulLogin(firstName) {
  isLoggedIn = true;
  var loginIcon = document.getElementById("login-icon");
  var signupIcon = document.getElementById("signup-icon");

  loginIcon.style.display = "none"; // Hide the login icon
  signupIcon.style.display = "none"; // Hide the signup icon

  var userNameContainer = document.getElementById("user-name-container");
  userNameContainer.style.display = "block";
  userNameContainer.textContent = "Hello, " + firstName; // Display the user's name

  var loginOverlay = document.getElementById("login-overlay");
  loginOverlay.style.display = "none"; // Hide login overlay

  document.documentElement.style.overflow = "auto"; // Enable body scroll
  document.body.style.overflow = "auto";
}

function handleLogout() {
  hideDropdown();
  localStorage.removeItem("sessionData"); // Remove session data from localStorage
  var loginIcon = document.getElementById("login-icon");
  loginIcon.style.display = "block"; // Show the login icon

  var userNameContainer = document.getElementById("user-name-container");
  userNameContainer.style.display = "none"; // Hide the user's name

  var loginOverlay = document.getElementById("login-overlay");
  loginOverlay.style.display = "none"; // Hide login overlay

  document.documentElement.style.overflow = "auto"; // Enable body scroll
  document.body.style.overflow = "auto";
}

function hideDropdown() {
  userDropdown.style.display = "none";
}

window.onload = function() {
  var storedSessionData = localStorage.getItem("sessionData");
  if (storedSessionData) {
    var sessionData = JSON.parse(storedSessionData);
    if (sessionData.isLoggedIn) {
      handleSuccessfulLogin(sessionData.username);
    }
  }
};

document.querySelector(".times-spin").addEventListener("click", function() {
  closeLoginForm();
});

const userNameContainer = document.getElementById("user-name-container");
const userDropdown = document.getElementById("user-dropdown");

userNameContainer.addEventListener("mouseenter", function() {
  userDropdown.style.display = "block";
});

userDropdown.addEventListener("mouseenter", function() {
  userDropdown.style.display = "block";
});

userNameContainer.addEventListener("mouseleave", function() {
  userDropdown.style.display = "none";
});

userDropdown.addEventListener("mouseleave", function() {
  userDropdown.style.display = "none";
});

const logoutLink = document.getElementById("logout-button");

logoutLink.addEventListener("click", function(event) {
  event.preventDefault();
  handleLogout();
  window.location.reload();
});



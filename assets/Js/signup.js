//signup-form logics

document.getElementById("create-account-button").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  var loginOverlay = document.getElementById("login-overlay");
  var signupOverlay = document.getElementById("signup-overlay");

  loginOverlay.style.display = "none"; // Hide login overlay
  signupOverlay.style.display = "block"; // Show signup overlay

  document.documentElement.style.overflow = "hidden"; // Disable body scroll
  document.body.style.overflow = "hidden";
});

document.querySelector(".times-spin-2").addEventListener("click", function() {
  var signupOverlay = document.getElementById("signup-overlay");

  signupOverlay.style.display = "none"; // Hide signup overlay

  document.documentElement.style.overflow = "auto"; // Enable body scroll
  document.body.style.overflow = "auto";
});

var signupOverlay = document.getElementById("signup-overlay");
var signupForm = document.querySelector(".signup-form");

signupOverlay.addEventListener("click", function(event) {
  if (event.target === signupOverlay) {
    signupOverlay.style.display = "none"; // Hide signup overlay
    document.documentElement.style.overflow = "auto"; // Enable body scroll
    document.body.style.overflow = "auto";
  }
});

signupForm.addEventListener("click", function(event) {
  event.stopPropagation(); // Stop the event from propagating to the body element
});

const emailInput2 = document.getElementById("email-input-2");
const passwordInput2 = document.getElementById("password-input-2");
const fname = document.getElementById("FName-input");
const Lname = document.getElementById("LName-input");
const joinButton = document.getElementById("join-button");

function checkSignupInputs() {
  if (
    emailInput2.value.trim() !== "" ||
    passwordInput2.value.trim() !== "" ||
    fname.value.trim() !== "" ||
    Lname.value.trim() !== ""
  ) {
    joinButton.classList.remove("disabled");
    joinButton.disabled = false;
  } else {
    joinButton.classList.add("disabled");
    joinButton.disabled = true;
  }
}

emailInput2.addEventListener("input", checkSignupInputs);
passwordInput2.addEventListener("input", checkSignupInputs);
fname.addEventListener("input", checkSignupInputs);
Lname.addEventListener("input", checkSignupInputs);

// Signup label logic...

const emailLabel2 = document.getElementById("email-input-2");
const passwordLabel2 = document.getElementById("password-input-2");
const FNameLabel2 = document.getElementById("FName-input");
const LNameLabel2 = document.getElementById("LName-input");

function toggleLabel2(event) {
  const input = event.target;
  const label = input.previousElementSibling;

  if (input.value.trim() !== "") {
    label.classList.add("active");
  } else {
    label.classList.remove("active");
  }
}

emailLabel2.addEventListener("input", toggleLabel2);
passwordLabel2.addEventListener("input", toggleLabel2);
FNameLabel2.addEventListener("input", toggleLabel2);
LNameLabel2.addEventListener("input", toggleLabel2);

// Signup-password hide or show logic here...

const passwordHide2 = document.getElementById("password-input-2");
const eyeIcon2 = document.getElementById("eye-icon-2");

eyeIcon2.addEventListener("click", function() {
  if (passwordHide2.getAttribute("type") === "password") {
    passwordHide2.setAttribute("type", "text");
    eyeIcon2.classList.remove("fa-eye-slash");
    eyeIcon2.classList.add("fa-eye");
  } else {
    passwordHide2.setAttribute("type", "password");
    eyeIcon2.classList.remove("fa-eye");
    eyeIcon2.classList.add("fa-eye-slash");
  }
});

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function displaySignupError(errorMessage) {
  var signupError = document.getElementById("signup-error");
  signupError.textContent = errorMessage;
  signupError.style.display = "block";
}

function handleSuccessfulSignup(firstName) {
  isLoggedIn = true;

  var loginIcon = document.getElementById("login-icon");
  var signupIcon = document.getElementById("signup-icon");

  loginIcon.style.display = "none"; // Hide the login icon
  signupIcon.style.display = "none"; // Hide the signup icon

  var userNameContainer = document.getElementById("user-name-container");
  userNameContainer.style.display = "block";
  userNameContainer.textContent = "Hello, " + firstName; // Display the user's name

  var signupOverlay = document.getElementById("signup-overlay");
  signupOverlay.style.display = "none"; // Hide signup overlay

  // Enable body scroll
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";

  // Store user information in localStorage
  const newUser = {
    email: emailValue,
    password: passValue,
    firstName: fnameValue,
    lastName: lnameValue,
  };

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  storedUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(storedUsers));
}

const SjoinButton = document.getElementById("join-button");
const SemailInput = document.getElementById("email-input-2");
const fnameInput = document.getElementById("FName-input");
const lnameInput = document.getElementById("LName-input");
const passInput = document.getElementById("password-input-2");
const checkbox = document.getElementById("checkbox");

SjoinButton.addEventListener("click", function(event) {
  event.preventDefault();

  const emailValue = SemailInput.value.trim();
  const fnameValue = fnameInput.value.trim();
  const lnameValue = lnameInput.value.trim();
  const passValue = passInput.value.trim();

  // Perform input validation here if necessary...
  let hasError = false;

  if (emailValue === "") {
    displaySignupError("Please enter a valid email address.");
    hasError = true;
  } else {
    displaySignupError("");
  }

  if (fnameValue === "") {
    displaySignupErrorFName("Please enter a valid first name.");
    hasError = true;
  } else {
    displaySignupErrorFName("");
  }

  if (lnameValue === "") {
    displaySignupErrorLName("Please enter a valid last name.");
    hasError = true;
  } else {
    displaySignupErrorLName("");
  }

  if (passValue === "") {
    displayPasswordError("Please enter a valid password.");
    hasError = true;
  } else {
    displayPasswordError("");
  }

  if (!hasError) {
    // All errors are resolved, proceed with signup
    const newUser = {
      email: emailValue,
      password: passValue,
      firstName: fnameValue,
      lastName: lnameValue,
    };

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    // Show a success message to the user or perform any other actions after successful signup
    alert("Signup successful!");

    handleSuccessfulSignup(fnameValue); // Call the function to update the icon
  }
  if (!hasError) {
    // All errors are resolved, proceed with signup
    handleSuccessfulSignup(fnameValue); // Call the function to update the icon
    alert("Signup successful!");
  }
});

SemailInput.addEventListener("input", function() {
  const emailValue = SemailInput.value.trim();

  if (emailValue === "") {
    displaySignupError("Please enter a valid email address.");
  } else {
    displaySignupError("");
  }
});

fnameInput.addEventListener("input", function() {
  const fnameValue = fnameInput.value.trim();

  if (fnameValue === "") {
    displaySignupErrorFName("Please enter a valid first name.");
  } else {
    displaySignupErrorFName("");
  }
});

lnameInput.addEventListener("input", function() {
  const lnameValue = lnameInput.value.trim();

  if (lnameValue === "") {
    displaySignupErrorLName("Please enter a valid last name.");
  } else {
    displaySignupErrorLName("");
  }
});

passInput.addEventListener("input", function() {
  const passValue = passInput.value.trim();

  if (passValue === "") {
    displayPasswordError("Please enter a valid password.");
  } else {
    displayPasswordError("");
  }
});

function displaySignupError(errorMessage) {
  const signupErrorContainer = document.getElementById("signup-error");
  signupErrorContainer.textContent = errorMessage;

  if (errorMessage) {
    signupErrorContainer.style.color = "red";
    signupErrorContainer.style.display = "block";
  } else {
    signupErrorContainer.style.display = "none";
  }
}

function displaySignupErrorFName(errorMessage) {
  const signupErrorContainer = document.getElementById("signup-error-Fname");
  signupErrorContainer.textContent = errorMessage;

  if (errorMessage) {
    signupErrorContainer.style.color = "red";
    signupErrorContainer.style.display = "block";
  } else {
    signupErrorContainer.style.display = "none";
  }
}

function displaySignupErrorLName(errorMessage) {
  const signupErrorContainer = document.getElementById("signup-error-Lname");
  signupErrorContainer.textContent = errorMessage;

  if (errorMessage) {
    signupErrorContainer.style.color = "red";
    signupErrorContainer.style.display = "block";
  } else {
    signupErrorContainer.style.display = "none";
  }
}

function displayPasswordError(errorMessage) {
  const signupErrorContainer2 = document.getElementById("signup-error-2");
  const signupErrorContainer3 = document.getElementById("signup-error-3");
  const passInput = document.getElementById("password-input-2");
  const passValue = passInput.value.trim();

  if (errorMessage) {
    signupErrorContainer2.style.display = "none";
    signupErrorContainer3.style.display = "block";
  } else {
    if (passValue.length < 8) {
      signupErrorContainer2.style.display = "block";
      signupErrorContainer3.style.display = "none";
    } else {
      signupErrorContainer2.style.display = "none";
      signupErrorContainer3.style.display = "block";
    }
  }
}

checkbox.addEventListener("change", function() {
  if (!checkbox.checked) {
    checkbox.checked = true;
  }
});

document.getElementById("forgot-password-link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default link behavior

  var twologinOverlay = document.getElementById("login-overlay");
  var ForgotOverlay = document.getElementById("forgot-password-overlay");

  twologinOverlay.style.display = "none"; // Hide login overlay
  ForgotOverlay.style.display = "block"; // Show signup overlay

  document.documentElement.style.overflow = "hidden"; // Disable body scroll
  document.body.style.overflow = "hidden";
});

document.querySelector("#close-forgot-password").addEventListener("click", function() {
  var ForgotOverlay = document.getElementById("forgot-password-overlay");

  ForgotOverlay.style.display = "none"; // Hide signup overlay

  document.documentElement.style.overflow = "auto"; // Enable body scroll
  document.body.style.overflow = "auto";
});

var ForgotOverlay = document.getElementById("forgot-password-overlay");
var ForgotOverlayForm = document.querySelector("#forgot-password-form");

ForgotOverlay.addEventListener("click", function(event) {
  if (event.target === ForgotOverlay) {
    ForgotOverlay.style.display = "none"; // Hide signup overlay
    document.documentElement.style.overflow = "auto"; // Enable body scroll
    document.body.style.overflow = "auto";
  }
});

ForgotOverlayForm.addEventListener("click", function(event) {
  event.stopPropagation(); // Stop the event from propagating to the body element
});


const forgotInput = document.getElementById("forgot-password-email");
const submitForgot = document.getElementById("submit-forgot");
const errorMessage = document.getElementById("forgot-error-message");

forgotInput.addEventListener("input", function() {
  checkForgotInput();
});

submitForgot.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent form submission
  validateForgotEmail();
});

function checkForgotInput() {
  const email = forgotInput.value.trim();

  if (email !== "") {
    submitForgot.disabled = false;
  } else {
    submitForgot.disabled = true;
  }
}

function validateForgotEmail() {
  const email = forgotInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    errorMessage.style.color = "red";
    errorMessage.style.display = "block";
    submitForgot.disabled = true;
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    submitForgot.disabled = false;
  }
}

var signupIcon = document.getElementById("signup-icon");
signupIcon.addEventListener("click", function() {
  var signupOverlay = document.getElementById("signup-overlay");
  signupOverlay.style.display = "block"; // Show signup overlay

  document.body.style.overflowY = "hidden"; // Disable body scroll
});

var closeSignupButton = document.querySelector(".times-spin-2");
closeSignupButton.addEventListener("click", function() {
  var signupOverlay = document.getElementById("signup-overlay");
  signupOverlay.style.display = "none"; // Hide signup overlay

  document.body.style.overflow = "auto"; // Enable body scroll
});

var signupOverlay = document.getElementById("signup-overlay");
signupOverlay.addEventListener("click", function(event) {
  if (event.target === signupOverlay) {
    signupOverlay.style.display = "none"; // Hide signup overlay
    document.body.style.overflow = "auto"; // Enable body scroll
  }
});

var logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Clear the signup form inputs
  SemailInput.value = "";
  fnameInput.value = "";
  lnameInput.value = "";
  passInput.value = "";

  // Hide the user name container
  var userNameContainer = document.getElementById("user-name-container");
  userNameContainer.style.display = "none";

  // Show the login and signup icons
  var loginIcon = document.getElementById("login-icon");
  var signupIcon = document.getElementById("signup-icon");
  loginIcon.style.display = "block";
  signupIcon.style.display = "block";

  // Clear the local storage
  localStorage.removeItem("users");

  // Show the login overlay
  var loginOverlay = document.getElementById("login-overlay");
  loginOverlay.style.display = "block";

  // Enable body scroll
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
});

window.onload = function() {
  var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  if (storedUsers.length > 0) {
    var lastUser = storedUsers[storedUsers.length - 1];
    handleSuccessfulSignup(lastUser.firstName);
  }
};

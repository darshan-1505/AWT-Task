function validateForm() {
  var fullName = document.forms["signupForm"]["fullName"].value;
  var username = document.forms["signupForm"]["username"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirmPassword = document.forms["signupForm"]["confirmPassword"].value;
  var gender = document.forms["signupForm"]["gender"].value;
  var phone = document.forms["signupForm"]["phone"].value;
  var email = document.forms["signupForm"]["email"].value;
  var state = document.forms["signupForm"]["state"].value;
  var agreement = document.forms["signupForm"]["agreement"].checked;

  // Reset error messages
  var errorMessages = document.getElementsByClassName("error");
  for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].style.display = "none";
  }

  var isValid = true;

  // Full Name validation
  if (fullName === "") {
      document.getElementById("fullNameError").style.display = "block";
      isValid = false;
  }

  // Username validation
  if (username === "") {
      document.getElementById("usernameError").style.display = "block";
      isValid = false;
  } else {
      var usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!username.match(usernameRegex)) {
          document.getElementById("usernameFormatError").style.display = "block";
          isValid = false;
      }
  }

  // Password validation
  if (password === "") {
      document.getElementById("passwordError").style.display = "block";
      isValid = false;
  } else {
      var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
      if (!password.match(passwordRegex)) {
          document.getElementById("passwordFormatError").style.display = "block";
          isValid = false;
      }
  }

  // Confirm Password validation
  if (confirmPassword === "" || confirmPassword !== password) {
      document.getElementById("confirmPasswordError").style.display = "block";
      isValid = false;
  }

  // Gender validation
  if (gender === "") {
      document.getElementById("genderError").style.display = "block";
      isValid = false;
  }

  // Phone validation
  if (phone === "" || phone.length !== 10 || isNaN(phone)) {
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
  }

  // Email validation
  if (email === "") {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
  } else {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailRegex)) {
          document.getElementById("emailFormatError").style.display = "block";
          isValid = false;
      }
  }

  // State validation
  if (state === "") {
      document.getElementById("stateError").style.display = "block";
      isValid = false;
  }

  // Agreement validation
  if (!agreement) {
      document.getElementById("agreementError").style.display = "block";
      isValid = false;
  }

  // Redirect to login page if the form is valid
  if (isValid) {
      window.location.href = "login.html"; // Replace with your login page URL
  }

  return false;
}
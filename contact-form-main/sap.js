var form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var valid = true;

  var allRequired = form.querySelectorAll("[required]");

  for (var i = 0; i < allRequired.length; i++) {
    var input = allRequired[i];
    var field = input.closest(".field");

    if (input.value.trim() === "") {
      field.classList.add("invalid");
      valid = false;
    } else {
      field.classList.remove("invalid");
    }
  }

  var firstName = document.getElementById("firstName");
  var firstNameField = firstName.closest(".field");
  var firstNameError = document.getElementById("firstNameError");
  var nameRegex = /^[A-Za-z]{2,50}$/;

  if (!nameRegex.test(firstName.value.trim())) {
    firstNameField.classList.add("invalid");
    firstNameError.textContent = "Please enter valid name";
    valid = false;
  } else {
    firstNameField.classList.remove("invalid");
    firstNameError.textContent = "This field is required";
  }

  
  var lastName = document.getElementById("lastName");
  var lastNameField = lastName.closest(".field");
  var lastNameError = document.getElementById("lastNameError");

  if (!nameRegex.test(lastName.value.trim())) {
    lastNameField.classList.add("invalid");
    lastNameError.textContent = "Please enter valid name";
    valid = false;
  } else {
    lastNameField.classList.remove("invalid");
    lastNameError.textContent = "This field is required";
  }

  var email = document.getElementById("email");
  var emailField = email.closest(".field");

  if (email.validity.valid === false) {
    emailField.classList.add("invalid");
    valid = false;
  } else {
    emailField.classList.remove("invalid");
  }

  var radios = form.querySelectorAll("input[name='query']");
  var radioField = radios[0].closest(".field");
  var radioSelected = false;

  for (var j = 0; j < radios.length; j++) {
    if (radios[j].checked) {
      radioSelected = true;
    }
  }

  if (radioSelected === false) {
    radioField.classList.add("invalid");
    valid = false;
  } else {
    radioField.classList.remove("invalid");
  }

  var consent = document.getElementById("consent");
  var consentField = consent.closest(".checkbox-field");

  if (consent.checked === false) {
    consentField.classList.add("invalid");
    valid = false;
  } else {
    consentField.classList.remove("invalid");
  }

  var toast = document.getElementById("toast");

  if (valid === true) {
    toast.classList.add("show");
    form.reset();

    setTimeout(function () {
      toast.classList.remove("show");
    }, 4000);
  }
});

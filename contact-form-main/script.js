function setInvalid(field, errorEl, isInvalid, errorMsg) {
  if (!field) {
    return true;
  }

  if (isInvalid) {
    field.classList.add("invalid");

    if (errorEl) {
      errorEl.textContent = errorMsg;
    }

    return false;
  } else {
    field.classList.remove("invalid");

    if (errorEl) {
      errorEl.textContent = "This field is required";
    }

    return true;
  }
}

var form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var valid = true;
  var nameRegex = /^[A-Za-z]{2,50}$/;

  var validations = [
    {
      input: document.getElementById("firstName"),
      error: document.getElementById("firstNameError"),
      message: "Please enter valid name",
      check: function (input) {
        if (input.value.trim() === "") return true;
        if (!nameRegex.test(input.value.trim())) return true;
        return false;
      }
    },
    {
      input: document.getElementById("lastName"),
      error: document.getElementById("lastNameError"),
      message: "Please enter valid name",
      check: function (input) {
        if (input.value.trim() === "") return true;
        if (!nameRegex.test(input.value.trim())) return true;
        return false;
      }
    },
    {
      input: document.getElementById("email"),
      error: null,
      check: function (input) {
        if (input.value.trim() === "") return true;
        if (input.validity.valid === false) return true;
        return false;
      }
    },
    {
      input: document.getElementById("consent"),
      error: null,
      wrapperClass: "checkbox-field",
      check: function (input) {
        return input.checked === false;
      }
    }
  ];
  for (var i = 0; i < validations.length; i++) {
    var rule = validations[i];
    var wrapper;

    if (rule.wrapperClass) {
      wrapper = rule.input.closest("." + rule.wrapperClass);
    } else {
      wrapper = rule.input.closest(".field");
    }

    var isInvalid = rule.check(rule.input);

    var result = setInvalid(
      wrapper,
      rule.error,
      isInvalid,
      rule.message
    );

    if (result === false) {
      valid = false;
    }
  }
  var radios = form.querySelectorAll("input[name='query']");
  var radioField = radios[0].closest(".field");
  var radioSelected = false;

  for (var j = 0; j < radios.length; j++) {
    if (radios[j].checked) {
      radioSelected = true;
      break;
    }
  }

  if (
    setInvalid(radioField, null, radioSelected === false) === false
  ) {
    valid = false;
  }
  var toast = document.getElementById("toast");

  if (valid) {
    toast.classList.add("show");
    form.reset();

    setTimeout(function () {
      toast.classList.remove("show");
    }, 4000);
  }
});

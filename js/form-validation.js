const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("umail");
const message = document.getElementById("message");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const emailValue = input.value.trim();
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    emailValue,
  );
  const isRuDomain = emailValue.includes(".ru");

  if (isEmailValid && !isRuDomain) {
    showSuccess(input);
  } else {
    if (!isEmailValid) {
      showError(input, "Email is not valid");
    } else {
      showError(input, "Email with .ru domains is not allowed");
    }
  }
}

function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`,
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`,
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkRequired([username, email, message])) {
    checkLength(username, 3, 15);
    checkEmail(email);
    checkLength(message, 10, 2560);
  }
});
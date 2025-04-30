const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("user-first-name");
const lastNameInput = document.getElementById("user-last-name");
const emailInput = document.getElementById("user-email");
const queryTypeContainer = document.querySelector(".query-type");
const radioInputs = document.querySelectorAll('input[name="queryType"]');
const messageInput = document.getElementById("message-input");
const agreementCheckbox = document.getElementById("agreement-input");
const toastContainer = document.querySelector(".toast-container");

const validateUserEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const showErrorMessage = (inputElement) => {
  const errorId = inputElement.getAttribute("aria-describedby");

  if (errorId) {
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
      errorElement.style.display = "flex";
      inputElement.setAttribute("aria-invalid", "true");
    }
  }
};

const hideErrorMessage = (inputElement) => {
  const errorId = inputElement.getAttribute("aria-describedby");

  if (errorId) {
    const errorSpan = document.getElementById(errorId);

    if (errorSpan) {
      errorSpan.style.display = "none";
      inputElement.setAttribute("aria-invalid", "false");
      inputElement.classList.remove("error-state");
    }
  }
};

const handleFormSubmit = () => {
  let isValid = true;

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  const radioValue = Array.from(radioInputs).find(
    (radio) => radio.checked
  )?.value;
  const agreementChecked = agreementCheckbox.checked;

  if (!firstName) {
    showErrorMessage(firstNameInput);
    firstNameInput.classList.add("error-state");
    isValid = false;
  }

  if (!lastName) {
    showErrorMessage(lastNameInput);
    lastNameInput.classList.add("error-state");
    isValid = false;
  }

  if (!validateUserEmail(email) || !email) {
    showErrorMessage(emailInput);
    emailInput.classList.add("error-state");
    isValid = false;
  }

  if (!message) {
    showErrorMessage(messageInput);
    messageInput.classList.add("error-state");
    isValid = false;
  }

  if (!radioValue) {
    showErrorMessage(queryTypeContainer);
    isValid = false;
  }

  if (!agreementChecked) {
    showErrorMessage(agreementCheckbox);
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  toastContainer.style.display = "flex";

  setTimeout(() => {
    toastContainer.style.display = "none";
  }, 5000);
};

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleFormSubmit();
});

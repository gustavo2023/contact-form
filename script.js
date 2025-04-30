const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("user-first-name");
const lastNameInput = document.getElementById("user-last-name");
const emailInput = document.getElementById("user-email");
const radioInputs = document.querySelectorAll('input[name="queryType"]');
const messageInput = document.getElementById("message-input");
const agreementCheckbox = document.getElementById("agreement-input");
const toastContainer = document.getElementById("toast-container");

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

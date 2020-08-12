const toggle = document.getElementById("toggle");
const modalOpen = document.querySelector(".modal-open");
const modal = document.querySelector(".madal-main--bgc");
const close = document.querySelector(".close");

toggle.addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("show-navmenu");
});

modalOpen.addEventListener("click", (e) => {
  modal.classList.add("show-modal");
});

close.addEventListener("click", (e) => {
  modal.classList.remove("show-modal");
});

window.addEventListener("click", (e) => {
  // if (e.target.classList.contains("madal-main--bgc"))
  //   modal.classList.remove("show-modal");
  e.target == modal ? modal.classList.remove("show-modal") : false;
});

// Form validation:    ///////////////////////
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const submitBtn = document.getElementById("submitBtn");

function showError(input, message) {
  const parentEl = input.parentElement;
  parentEl.classList.remove("success");
  parentEl.classList.add("error");
  const small = parentEl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const parentEl = input.parentElement;
  parentEl.classList.remove("error");
  parentEl.classList.add("success");
}
function firstLetter(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${firstLetter(input)} must not be less than ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${firstLetter(input)} must be no more than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function validateEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(input.value).toLowerCase())) {
    showError(input, `${firstLetter(input)} is not valid`);
  } else {
    showSuccess(input);
  }
}

function comparePasswods(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `${firstLetter(input2)} is not valid`);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  validateEmail(email);
  comparePasswods(password, password2);
});

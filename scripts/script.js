const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("btn-close");
const loginForm = document.getElementById("form");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const inputCheckbox = document.getElementById("checkbox");

  const res = `Email/Телефон: ${inputEmail.value}\nПароль: ${inputPassword.value}\nЗапомнить пароль: ${inputCheckbox.checked}`;

  window.alert(res);
});

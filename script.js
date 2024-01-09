const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownCaret = document.querySelector(".arrow");
const dropdownContent = document.querySelector(".dropdown-content");

// add click event to dropdown button
dropdownBtn.addEventListener("click", () => {
  // add rotate to caret element
  dropdownCaret.classList.toggle("arrow-rotate");
  // add open styles to menu element
  dropdownContent.classList.toggle("menu-open");
  dropdownBtn.setAttribute(
    "aria-expanded",
    dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});
var password = document.getElementById('fakePassword');
var toggler = document.getElementById('toggler');
showHidePassword = () => {
if (password.type == 'password') {
password.setAttribute('type', 'text');
toggler.classList.add('fa-eye-slash');
} else {
toggler.classList.remove('fa-eye-slash');
password.setAttribute('type', 'password');
}
};
toggler.addEventListener('click', showHidePassword);
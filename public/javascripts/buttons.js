const options = document.querySelector("#options");
const menu = document.querySelector("#menu");
options.addEventListener("click", () => {
  menu.classList.toggle("show");
});
const exit = document.querySelector("#exit");
exit.addEventListener("click", () => {
  menu.classList.toggle("show");
});

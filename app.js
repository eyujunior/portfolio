const bars = document.querySelector(".bars");
const exit = document.querySelector("#exit");
const navContainer = document.querySelector(".nav-container");

bars.addEventListener("click", () => navContainer.classList.toggle("mobile"));

exit.addEventListener("click", () => navContainer.classList.remove("mobile"));

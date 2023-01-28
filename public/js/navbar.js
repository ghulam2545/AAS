const hamburger = document.querySelector(".hamburger");
const nav_list = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    nav_list.classList.toggle("open");
});

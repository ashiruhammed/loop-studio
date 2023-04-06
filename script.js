const hamburgerMenus = document.querySelectorAll(".menu");

const navBar = document.querySelector(".nav");

const list = document.querySelector(".list");
navBar.addEventListener("click", function (e) {
  const menu = e.target.closest(".menu");
  if (!menu) return;
  hamburgerMenus.forEach((el) => {
    el.classList.toggle("hide");
  });
  list.classList.toggle("open_list");
});

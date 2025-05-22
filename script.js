const header = document.querySelector("#header");
const modules = document.querySelector(".modules");
const btnMenu = document.querySelector("#btn-menu");
const btnCloseMenu = document.querySelector("#btn-close-menu");
const menu = document.querySelector("#menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
});

modules.addEventListener("click", function (e) {
  const event = e.target;
  const click = event.closest(".module");

  if (click) {
    const list = click.querySelector(".list");
    const icon = click.querySelector(".fa-solid");
    icon.classList.toggle("fa-chevron-right");
    icon.classList.toggle("fa-chevron-down");
    list.classList.toggle("hidden");
    click.classList.toggle("rounded-full");
    click.classList.toggle("rounded-2xl");
  }
});

btnMenu.addEventListener("click", function () {
  menu.classList.remove("hidden");
  menu.classList.add("flex");
  setTimeout(() => {
    menu.classList.toggle("opacity-0");
    document
      .querySelector("#menu-content")
      .classList.toggle("translate-x-full");
  }, 10);
});

btnCloseMenu.addEventListener("click", function () {
  menu.classList.toggle("opacity-0");
  document.getElementById("menu-content").classList.toggle("translate-x-full");

  setTimeout(() => {
    menu.classList.toggle("hidden");
  }, 300);
});

menu.addEventListener("click", function (event) {
  clique = event.target;
  if (clique.classList.contains("menu")) {
    document
      .getElementById("menu-content")
      .classList.toggle("translate-x-full");

    setTimeout(() => {
      menu.classList.toggle("hidden");
    }, 300);
  }
});

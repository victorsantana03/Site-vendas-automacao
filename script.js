const header = document.querySelector("#header");
const modules = document.querySelector(".modules");

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

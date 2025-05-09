const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});

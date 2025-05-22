const header = document.querySelector("#header");
const modules = document.querySelector(".modules");
const btnMenu = document.querySelector("#btn-menu");
const btnCloseMenu = document.querySelector("#btn-close-menu");
const menu = document.querySelector("#menu");

const videoGrid = document.querySelector("#video-grid");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("shadow-md");
  } else {
    header.classList.remove("shadow-md");
  }
});
//ABRIR E FECHAR MÓDULOS
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
//ABRIR MENU
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
//FECHAR MENU
btnCloseMenu.addEventListener("click", function () {
  menu.classList.toggle("opacity-0");
  document.getElementById("menu-content").classList.toggle("translate-x-full");

  setTimeout(() => {
    menu.classList.toggle("hidden");
  }, 300);
});
//FECHAR MENU AO CLICAR FORA
menu.addEventListener("click", function (event) {
  clique = event.target;
  if (clique.classList.contains("menu")) {
    menu.classList.add("opacity-0");
    document
      .getElementById("menu-content")
      .classList.toggle("translate-x-full");

    setTimeout(() => {
      menu.classList.remove("flex");
      menu.classList.add("hidden");
    }, 300);
  }
});

const moreVideos = [
  {
    src: "https://www.youtube.com/embed/smuEmUWb5sM",
    title: "Depoimento de um de nossos alunos do curso Automação Inverter!",
  },
  {
    src: "https://www.youtube.com/embed/ddtqNShdvCQ",
    title: "Depoimento de um de nossos alunos do curso Automação Inverter",
  },
];

let expanded = false; // estado inicial: recolhido
let addedIframes = []; // armazenar os iframes que adicionarmos

const showMoreButton = document.querySelector("#show-more");

showMoreButton.addEventListener("click", () => {
  if (!expanded) {
    moreVideos.forEach((video) => {
      const iframe = document.createElement("iframe");
      iframe.className = "z-10 size-[300px] rounded-4xl";
      iframe.src = video.src;
      iframe.title = video.title;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      videoGrid.insertBefore(iframe, showMoreButton.parentElement);
      addedIframes.push(iframe);
    });
    showMoreButton.innerHTML =
      '<i class="fa-solid fa-chevron-left text-white"></i>';
    expanded = true;
  } else {
    addedIframes.forEach((iframe) => videoGrid.removeChild(iframe));
    addedIframes = [];
    showMoreButton.innerHTML =
      '<i class="fa-solid fa-chevron-right text-white"></i>';
    expanded = false;
  }
});

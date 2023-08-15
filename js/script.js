const navMenuBtn = document.querySelector(".nav-menu-btn");
const mainNav = document.getElementById("main-nav");
const header = document.querySelector("header");
const logo = document.querySelector("header .logo img");
const mainWords = ["graphics", "design", "development", "marketing", "creative"];

const changeLogo = e => {
  const mdWindow = window.matchMedia("(min-width: 992px)");

  if (mdWindow.matches) {
    logo.setAttribute("src", "img/308brandlogofull.svg");
    logo.style.width = "300px";
  } else {
    logo.setAttribute("src", "img/308brandlogosmall.svg");
    logo.style.width = "150px";
  }
};

navMenuBtn.addEventListener("click", e => {
  navMenuBtn.classList.toggle("expanded");
  mainNav.classList.toggle("expanded");
});

window.addEventListener("scroll", e => {
  if (scrollY > 75) {
    logo.setAttribute("src", "img/308brandlogosmall.svg");
    logo.style.width = "150px";
    header.style.borderBottom = "1px solid var(--clr-header-border)";
    header.style.boxShadow = "0 1px 2px hsl(0 0% 0% / 15%)";
  } else {
    changeLogo();
    header.style.borderBottom = "none";
    header.style.boxShadow = "none";
  }
});

const changeWords = () => {
  let index = 0;
  const span = document.querySelector(".main-content h1 span");

  setInterval(() => {
    if (mainWords.length > index) {
      span.textContent = mainWords[index];
      index = index + 1;
    } else {
      index = 0;
      span.textContent = "digital";
    }
  }, 3000);
};

window.addEventListener("DOMContentLoaded", changeLogo);
window.addEventListener("DOMContentLoaded", changeWords);
window.addEventListener("resize", changeLogo);

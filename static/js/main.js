const navMenu = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");

function preventDefault(e) {
  e.preventDefault();
}

function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener("wheel", preventDefault, { passive: false }); // modern desktop
  window.addEventListener("touchmove", preventDefault, { passive: false }); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

document.querySelector(".menu-icon").addEventListener("click", () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
  disableScroll();
});
document.querySelector(".fa-x").addEventListener("click", () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
});
overlay.addEventListener("click");

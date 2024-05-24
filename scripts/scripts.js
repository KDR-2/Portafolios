const togglemenu = document.getElementById("togglemenu");
const navbar = document.getElementById("menu");

togglemenu.addEventListener("click", () => {
  navbar.classList.toggle("navigation--active");
});

particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

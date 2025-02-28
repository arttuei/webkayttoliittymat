document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show"); // Näytä/piilota valikko
    menuToggle.classList.toggle("active"); // Muuta ikoniksi "X"
  });
});

const toggle = document.getElementById(".menu-toggle");
const navbar = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
    console.log("hola");
    
  navbar.classList.toggle("active");
});
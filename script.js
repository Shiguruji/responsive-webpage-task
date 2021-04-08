const hamburger = document.getElementById("hamburger");
const navLINKS = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLINKS.classList.toggle("show");
});
 
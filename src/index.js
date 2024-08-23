const navSmall = document.querySelector(".nav-small");
const hamburger = document.querySelector(".hamburger");

hamburger.onclick = function() {
    navSmall.classList.toggle("hidden");
    navSmall.classList.toggle("visible");
}
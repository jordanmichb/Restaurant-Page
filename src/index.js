//const navSmall = document.querySelector(".nav-small");
const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");


function setNav() {
    const query = window.matchMedia("(max-width: 550px)");
    if (query.matches) nav.classList.add("nav-small");
    else {
        nav.classList.remove("nav-small");
        nav.classList.remove("visible");
    }
}
setNav();

window.addEventListener('resize', setNav);



hamburger.onclick = function() {
    //navSmall.classList.toggle("hidden");
    nav.classList.toggle("visible");
}
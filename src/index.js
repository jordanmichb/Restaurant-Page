//const navSmall = document.querySelector(".nav-small");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");


function setNav() {
    const query = window.matchMedia("(max-width: 550px)");
    if (query.matches) nav.classList.add("nav-small");
    else {
        nav.classList.remove("nav-small");
        nav.classList.remove("visible");
        menu.classList.remove("active");
    }
}
setNav();

window.addEventListener('resize', setNav);



menu.onclick = function() {
    //navSmall.classList.toggle("hidden");
    nav.classList.toggle("visible");
    menu.classList.toggle("active");
}
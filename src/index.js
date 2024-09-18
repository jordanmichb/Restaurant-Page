import './style.css';
import loadHome from'./home.js';



const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

/******************************************************/
/* Controls how nav menu appears based on screen size */
/******************************************************/
function setNav() {
    // On smaller screen, menu shows as hamburger icon
    const query = window.matchMedia("(max-width: 550px)");
    if (query.matches) nav.classList.add("nav-small");
    // On larger screen, remove all styles reserved for smaller screen
    else {
        nav.classList.remove("nav-small");
        nav.classList.remove("visible");
        menu.classList.remove("active");
    }
}
// Initial call to set nav styles
setNav();

// Subsequent calls to set nav styles when screen is resized
window.addEventListener('resize', setNav);

// When icon is clicked, menu shows/hides and icon transforms to hamburger/X
menu.onclick = function() {
    nav.classList.toggle("visible");
    menu.classList.toggle("active");
}

loadHome();
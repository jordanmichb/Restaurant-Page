import './style.css';
import loadHome from'./home.js';
import loadMenu from'./menu.js';
import loadAbout from './about.js';



const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');

/******************************************************/
/* Controls how nav menu appears based on screen size */
/******************************************************/
function setNav() {
    // On smaller screen, menu shows as hamburger icon
    const query = window.matchMedia('(max-width: 550px)');
    if (query.matches) nav.classList.add('nav-small');
    // On larger screen, remove all styles reserved for smaller screen
    else {
        nav.classList.remove('nav-small');
        nav.classList.remove('visible');
        hamburger.classList.remove('active');
    }
}
// Initial call to set nav styles
setNav();

// Subsequent calls to set nav styles when screen is resized
window.addEventListener('resize', setNav);

// When icon is clicked, menu shows/hides and icon transforms to hamburger/X
hamburger.onclick = function() {
    nav.classList.toggle('visible');
    hamburger.classList.toggle('active');
}

/************************************/
/* Listeners for navigation buttons */
/************************************/
homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
aboutBtn.addEventListener('click', loadAbout);




//loadHome();
loadAbout();

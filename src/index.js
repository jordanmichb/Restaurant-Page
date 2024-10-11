import './style.css';
import loadHome from'./home.js';
import loadMenu from'./menu.js';
import loadAbout from './about.js';

/******************************************************/
/* Controls how nav menu appears based on screen size */
/******************************************************/
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');

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

// When icon is clicked, menu shows/hides and icon transforms to hamburger/X
hamburger.onclick = function() {
    nav.classList.toggle('visible');
    hamburger.classList.toggle('active');
}


/************************************/
/* Listeners for navigation buttons */
/************************************/
function setNavEvents() {
    const homeBtn = document.querySelector('#home-btn');
    const menuBtn = document.querySelector('#menu-btn');
    const aboutBtn = document.querySelector('#about-btn');

    // Initial call to set nav styles
    setNav();
    // Subsequent calls to set nav styles when screen is resized
    window.addEventListener('resize', setNav);
    // Nav button click events for changing pages
    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    aboutBtn.addEventListener('click', loadAbout);
}

function loadPage() {
    setNavEvents();
    loadHome();
}

loadPage();
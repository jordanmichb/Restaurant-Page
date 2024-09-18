import './style.css';

const content = document.querySelector('#content');

function createComponent() {
    const home = document.createElement('div');
    home.id = 'home';
    home.classList.add('component');

    const header = document.createElement('h2');
    header.classList.add('component-header');
    header.textContent = 'Premium dishes and handcrafted cocktails';

    const text = document.createElement('p');
    text.classList.add('component-text');
    text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '+
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '+
                        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '+
                        'pariatur.';
    
    const social = document.createElement('p');
    social.classList.add('component-header');
    social.textContent = 'Follow us - ';

    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.setAttribute('target', '_blank');
    link.textContent = '@thevillage';

    social.appendChild(link);
    home.appendChild(header);
    home.appendChild(text);
    home.appendChild(social);

    return home;
}

content.appendChild(createComponent());

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
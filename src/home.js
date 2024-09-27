function createHome() {
    const home = document.createElement('div');
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

function loadHome() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createHome()); 
}

export default loadHome;
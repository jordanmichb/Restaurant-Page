function createInfo() {
    const info = document.createElement('div');
    info.classList.add('info');
    // Hours section
    const hours = document.createElement('div');
    hours.classList.add('info-component');

    const hoursHeader = document.createElement('p');
    hoursHeader.classList.add('component-header');
    hoursHeader.textContent = 'Hours';

    const mon = document.createElement('span');
    mon.textContent = 'Mon 11:30am - 9:00pm';

    const tues = document.createElement('span');
    tues.textContent = 'Tues 11:30am - 9:00pm';

    const wed = document.createElement('span');
    wed.textContent = 'Wed 11:30am - 9:00pm';

    const thurs = document.createElement('span');
    thurs.textContent = 'Thurs 11:30am - 9:00pm';

    const fri = document.createElement('span');
    fri.textContent = 'Fri 11:30am - 9:00pm';

    const sat = document.createElement('span');
    sat.textContent = 'Sat 11:30am - 9:00pm';

    const sun = document.createElement('span');
    sun.textContent = 'Sun 11:30am - 9:00pm';

    hours.appendChild(hoursHeader);
    hours.appendChild(mon);
    hours.appendChild(tues);
    hours.appendChild(wed);
    hours.appendChild(thurs);
    hours.appendChild(fri);
    hours.appendChild(sat);
    hours.appendChild(sun);

    // Contact section
    const contact = document.createElement('div');
    contact.classList.add('info-component');

    const contactHeader = document.createElement('p');
    contactHeader.classList.add('component-header');
    contactHeader.textContent = 'Contact';
    contact.appendChild(contactHeader);

    // Address section
    const address = document.createElement('div');
    address.classList.add('info-component');

    const addressHeader = document.createElement('p');
    addressHeader.classList.add('component-header');
    addressHeader.textContent = 'Address';
    address.appendChild(addressHeader);

    info.appendChild(hours);
    info.appendChild(contact);
    info.appendChild(address);

    return info;
}

function createAbout() {
    const about = document.createElement('div');
    about.classList.add('component');

    const header = document.createElement('h2');
    header.classList.add('component-header');
    header.textContent = 'About Us';

    const text = document.createElement('p');
    text.classList.add('component-text');
    text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '+
                        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '+
                        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris '+
                        'nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in '+
                        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla '+
                        'pariatur.';

    about.appendChild(header);
    about.appendChild(text);
    about.appendChild(createInfo());

    return about;
}

/*******************************************************/
/* Function to be called in index.js when loading menu */
/*******************************************************/
function loadAbout() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createAbout());
}

export default loadAbout;
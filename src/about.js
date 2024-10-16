/********************************************************/
/* Create the restaurants info section under about text */
/********************************************************/
function createInfo() {
    const info = document.createElement('div');
    info.classList.add('info');

    /**********************/
    /* Hours Section      */
    /**********************/
    const hours = document.createElement('div');
    hours.classList.add('info-component');

    const hoursHeader = document.createElement('h3');
    hoursHeader.classList.add('component-header');
    hoursHeader.textContent = 'Hours';

    const mon = document.createElement('span');
    mon.textContent = 'Mon 11:30am - 10:00pm';

    const tues = document.createElement('span');
    tues.textContent = 'Tues 11:30am - 10:00pm';

    const wed = document.createElement('span');
    wed.textContent = 'Wed 11:30am - 10:00pm';

    const thurs = document.createElement('span');
    thurs.textContent = 'Thurs 11:30am - 10:00pm';

    const fri = document.createElement('span');
    fri.textContent = 'Fri 11:30am - 11:00pm';

    const sat = document.createElement('span');
    sat.textContent = 'Sat 10:00am - 11:00pm';

    const sun = document.createElement('span');
    sun.textContent = 'Sun 10:00am - 11:00pm';

    /***********************/
    /* Contact Section    */
    /***********************/
    const contactHeader = document.createElement('h3');
    contactHeader.classList.add('component-header');
    contactHeader.textContent = 'Contact';

    const contact = document.createElement('div');
    contact.classList.add('info-component');

    const phone = document.createElement('span');
    phone.textContent = '(123) 456 - 9780';

    const email = document.createElement('span');
    email.textContent = 'thevillage@gmail.com';

    contact.appendChild(contactHeader);
    contact.appendChild(phone);
    contact.appendChild(email);

    /**********************/
    /* Address Section    */
    /**********************/
    const address = document.createElement('div');
    address.classList.add('info-component');

    const addressHeader = document.createElement('h3');
    addressHeader.classList.add('component-header');
    addressHeader.textContent = 'Address';

    const adr = document.createElement('span');
    adr.textContent = '123 Street Name'

    const city = document.createElement('span');
    city.textContent = 'City Name, XY, 50276'

    const country = document.createElement('span');
    country.textContent = 'United States'

    address.appendChild(addressHeader);
    address.appendChild(adr);
    address.appendChild(city);
    address.appendChild(country);

    hours.appendChild(hoursHeader);
    hours.appendChild(mon);
    hours.appendChild(tues);
    hours.appendChild(wed);
    hours.appendChild(thurs);
    hours.appendChild(fri);
    hours.appendChild(sat);
    hours.appendChild(sun);

    info.appendChild(hours);
    info.appendChild(contact);
    info.appendChild(address);
    

    return info;
}

/*********************************************************/
/* Create about section and create/append restaurant ifo */
/*********************************************************/
function createAbout() {
    const about = document.createElement('div');
    about.classList.add('component');
    about.classList.add('about');

    const header = document.createElement('h2');
    header.classList.add('component-header');
    header.textContent = 'About Us';

    const text = document.createElement('p');
    text.classList.add('component-text');
    text.classList.add('about-text');
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

/********************************************************/
/* Function to be called in index.js when loading about */
/********************************************************/
function loadAbout() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createAbout());
}

export default loadAbout;
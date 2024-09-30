import * as menuContent from './menuContent.js';

/*************************************************************/
/* Create section of the menu e.g. starters, mains, desserts */
/*************************************************************/
function createMenuComponent(componentName) {
    const component = document.createElement('div');
    component.classList.add('menu-component');

    let head = document.createElement('h2');
    head.classList.add('menu-header');
    head.textContent = componentName;

    let section = document.createElement('div');
    section.classList.add('menu-section');

    component.appendChild(head);
    component.appendChild(section);

    return component;
}

/***************************************************/
/* Create items for the corresponding menu section */
/***************************************************/
function addComponentItems(component, componentName) {
    const section = component.querySelector('.menu-section');
    // Get lists of items from menuContent.js based on section name
    const sectionContent = menuContent[componentName];

    for (let i = 0; i < sectionContent.length; i++) {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const price = document.createElement('span');
        price.classList.add('item-price');
        price.textContent = sectionContent[i]['price'];

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = sectionContent[i]['name'];

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-text');
        itemDesc.textContent = sectionContent[i]['description'];

        item.appendChild(price);
        item.appendChild(itemName);
        item.appendChild(itemDesc);
        section.appendChild(item);
    }
}

/****************************************************************/
/* Build the menu based on sections and items in menuContent.js */
/****************************************************************/
function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.add('component');

    for (let i = 0; i < menuContent.sections.length; i++) {
        const component = createMenuComponent(menuContent.sections[i]);
        addComponentItems(component, menuContent.sections[i]);

        menu.appendChild(component);
    }

    return menu;
}

/*******************************************************/
/* Function to be called in index.js when loading menu */
/*******************************************************/
function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createMenu());
}

export default loadMenu;
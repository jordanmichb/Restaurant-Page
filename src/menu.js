import * as menuContent from './menuContent.js';
/*const mains = [
    {
        price: '$48',
        name: 'Skirt Steak Salad',
        description: '5-ounce sliced teriyaki marinated'+
        'skirt steak, Asian greens, soba noodles, '+
        'green beans, pickled ginger, mandarin oranges, '+
        'daikon radish, ginger-soy vinaigrette, tamarind cashew glaze',
    },
    {
        price: '$22',
        name: 'Pasta Sedani',
        description: 'Monograno felicetti sedani pomodoro, toy box '+
        'tomatoes, basil, arugula, parmigiano reggiano, toasted cheesy garlic bread',
    },
    {
        price: '$36',
        name: 'Roasted Salmon',
        description: 'Pearl couscous, toy box tomatoes, sun-dried tomatoes, '+
        'organic spinach, herbs & radish, basil pesto, tzatziki',
    },
    {
        price: '$22',
        name: 'Harvest & Goat Cheese Salad',
        description: 'Herb marinated chicken, baby greens, laura chenel goat cheese, '+
        'edamame, toasted oats & pecans, brentwood sweet corn, toy box tomatoes, '+
        'honey-balsamic vinaigrette',
    },
];*/

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

function addComponentItems(component, componentName) {
    const section = component.querySelector('.menu-section');
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

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.add('component');

    /*const component1 = document.createElement('div');
    component1.classList.add('menu-component');*/

    const sections = ['starters', 'mains'];

    for (let i = 0; i < sections.length; i++) {
        /*const component = document.createElement('div');
        component.classList.add('menu-component');

        let head = document.createElement('h2');
        head.classList.add('menu-header');
        head.textContent = sections[i];

        let section = document.createElement('div');
        section.classList.add('menu-section');

        component.appendChild(head);
        component.appendChild(section);*/
        const component = createMenuComponent(sections[i]);
        addComponentItems(component, sections[i]);

        menu.appendChild(component);
    }

    /*let head = document.createElement('h2');
    head.classList.add('menu-header');
    head.textContent = 'Mains';

    let section = document.createElement('div');
    section.classList.add('menu-section');*/



    
    /*
    for (let i = 0; i < mains.length; i++) {
        const item = document.createElement('div');
        item.classList.add('menu-item');

        const price = document.createElement('span');
        price.classList.add('item-price');
        price.textContent = mains[i]['price'];

        const itemName = document.createElement('div');
        itemName.classList.add('item-name');
        itemName.textContent = mains[i]['name'];

        const itemDesc = document.createElement('p');
        itemDesc.classList.add('item-text');
        itemDesc.textContent = mains[i]['description'];

        item.appendChild(price);
        item.appendChild(itemName);
        item.appendChild(itemDesc);
        section.appendChild(item);
    }*/


    /*
    let item = document.createElement('div');
    item.classList.add('menu-item');

    let price = document.createElement('span');
    price.classList.add('item-price');
    price.textContent = '$48';

    let itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = 'Skirt Steak Salad';

    let itemDesc = document.createElement('p');
    itemDesc.classList.add('item-text');
    itemDesc.textContent = '5-ounce sliced teriyaki marinated '+
                            'skirt steak, Asian greens, soba noodles, '+
                            'green beans, pickled ginger, mandarin oranges, '+
                            'daikon radish, ginger-soy vinaigrette, tamarind cashew glaze'


    item.appendChild(price);
    item.appendChild(itemName);
    item.appendChild(itemDesc);
    section.appendChild(item);*/

    /*component1.appendChild(head);
    component1.appendChild(section);

    menu.appendChild(component1);*/

    return menu;
}

function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createMenu()); 

    
}

export default loadMenu;
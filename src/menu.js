function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.classList.add('component');

    const component1 = document.createElement('div');
    component1.classList.add('menu-component');

    let head = document.createElement('h2');
    head.classList.add('menu-header');
    head.textContent = 'Mains';

    let section = document.createElement('div');
    section.classList.add('menu-section');



    



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
    section.appendChild(item);

    component1.appendChild(head);
    component1.appendChild(section);

    menu.appendChild(component1);

    return menu;
}

function loadMenu() {
    const content = document.querySelector('#content');
    content.textContent = "";
    content.appendChild(createMenu()); 
}

export default loadMenu;
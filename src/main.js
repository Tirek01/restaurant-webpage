import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";
import homePicture from "./images/homePicture.jpg";

import "./style.css"


createHome();

const nav = document.querySelector('nav');
const restaurantLogo = document.createElement('img');
restaurantLogo.src = homePicture;
nav.insertAdjacentElement('afterend', restaurantLogo);
nav.addEventListener('click', e => {
    const container = document.querySelector('.container');
    let target = e.target;
    if (target.tagName === 'INPUT') {
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        container.classList.remove('contact-style');
        container.classList.remove('home-style');
        container.classList.remove('menu-style');
        switch (target.value) {
            case 'Home':
                createHome();
                break;
            case 'Menu':
                createMenu();
                break;
            case 'Contact':
                createContact();
                break;
            default:
                break;
        }
    }
})
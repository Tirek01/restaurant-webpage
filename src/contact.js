const container = document.querySelector('.container');

const contactInfo = {
    name: 'Harvest Table',
    address: '456 Greenway Road, Farmstead City, 12345',
    phone: '(555) 123-4567',
    email: 'contact@harvesttable.com',
    website: 'www.harvesttable.com',
    instagram: '@harvesttable',
    facebook: '@harvesttable',
    twitter: '@HarvestTable',
}
function createContact() {
    const contact = document.createElement('div');
    container.appendChild(contact);
    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
    contact.appendChild(heading);

    for (const property in contactInfo) {
        const info = document.createElement('p');
        info.textContent = property.slice(0, 1).toUpperCase() + property.slice(1);
        contact.appendChild(info);
        const infoText = document.createElement('p');
        infoText.textContent = contactInfo[property];
        contact.appendChild(infoText);
    }
    container.classList.add('contact-style');
}

export {createContact};
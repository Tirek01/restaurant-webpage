import './home.css'
const container = document.querySelector('.container');

function homepageInfo() {
    const info = document.createElement('div');
    container.appendChild(info);

    const headline = document.createElement('h1');
    headline.textContent = 'Harvest Table, best Restaurant in New York'
    info.appendChild(headline);

    const restaurantInfo = document.createElement('p');
    restaurantInfo.textContent = 'Harvest Table is a modern bistro serving farm-to-table dishes made with the freshest local ingredients. Our menu features a blend of classic comfort foods and innovative flavors, perfect for any occasion. Enjoy a relaxed yet refined dining experience with exceptional service in a welcoming ambiance.';
    info.appendChild(restaurantInfo);
}

function openingTime() {
    const openingHours = document.createElement('div');
    container.appendChild(openingHours);

    const heading = document.createElement('h2');
    heading.textContent = 'Opening Time';
    openingHours.appendChild(heading);

    const hours = ['Monday: 6am - 6pm', 'Tuesday: 6am - 6pm', 'Wednesday: 6am - 6pm', 'Thursday: 6am - 10pm', 'Friday: 6am - 10pm', 'Saturday: 8am - 10pm', 'Sunday: 8am - 8pm',];

    for (let i = 0; i < hours.length; i++) {
        const hour = document.createElement('p');
        hour.textContent = hours[i];
        openingHours.appendChild(hour);
    }
}

function location() {
    const location = document.createElement('div');
    container.appendChild(location);
    const heading = document.createElement('h2');
    heading.textContent = 'Location';

    location.appendChild(heading);

    const locationInfo = document.createElement('p');
    locationInfo.textContent = 'Manhattan, NY 10036';
    location.appendChild(locationInfo);

}

function createHome() {
    homepageInfo();
    openingTime();
    location();

    container.classList.add('home-style');
}

export { createHome };
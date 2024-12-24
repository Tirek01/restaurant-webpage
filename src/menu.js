import foodExample from './images/food.jpg';

function menuArray(arr) {
    const menuName = arr[0];
    const menuDescription = `Description: ${arr[1]}`;
    const menuIngredients = `Ingredients: ${arr[2]}`;
    const menuPrice = `$${arr[3]}`;
    return {
        name: menuName,
        description: menuDescription,
        ingredients: menuIngredients,
        price: menuPrice,
    }
}

const myMenu = (function () {
    // menu array setup [<MenuName>, <Description>, <Ingredients>, <Price(without$)>,]
    const firstMenu = ['Grilled Lemon Herb Chicken', 'A tender, juicy chicken breast marinated in a zesty lemon and herb mix, grilled to perfection.', 'Chicken breast, lemon, garlic, olive oil, rosemary, thyme, salt, pepper.', 18.99,];

    const secondMenu = ['Roasted Vegetable Risotto', 'A creamy, comforting risotto made with seasonal roasted vegetables, perfectly cooked rice, and a touch of Parmesan.', 'Arborio rice, zucchini, bell peppers, carrots, peas, vegetable broth, Parmesan, butter, garlic, olive oil.', 15.49,];

    const thirdMenu = ['Seared Salmon with Mango Salsa', 'Pan-seared salmon fillet topped with a fresh, tangy mango salsa for a burst of flavor.', 'Salmon, mango, red onion, cilantro, lime, olive oil, garlic, salt, pepper.', 22.99,];

    const firstDrink = ['Classic Mojito', 'A refreshing cocktail with rum, fresh mint, lime, and a touch of sugar, topped with soda water.', 'White rum, mint leaves, lime, sugar, soda water, ice.', 8.99,];

    const secondDrink = ['Iced Chai Latte', 'A smooth and spicy iced chai latte made with black tea, cinnamon, cardamom, and a splash of milk.', 'Black tea, cinnamon, cardamom, cloves, milk, ice.', 5.99,];

    return [menuArray(firstMenu), menuArray(secondMenu), menuArray(thirdMenu), menuArray(firstDrink), menuArray(secondDrink)];
})();

function createMenu() {
    console.log(myMenu)
    const container = document.querySelector('.container');

    for(let i = 0; i < myMenu.length; i++) {
        const menu = document.createElement('div');
        container.appendChild(menu);
        const img = document.createElement('img');
        img.src = foodExample;
        menu.appendChild(img);
        let counter = 0;
        for (const property in myMenu[i]) {
            if (counter === 0) {
                const heading = document.createElement('h2')
                heading.textContent = myMenu[i][property];
                menu.appendChild(heading);
            } else {
                const p = document.createElement('p');
                p.textContent = myMenu[i][property];
                menu.appendChild(p);
            } 
            counter++;
        }
    }
    container.classList.add('menu-style');
}

export {createMenu}
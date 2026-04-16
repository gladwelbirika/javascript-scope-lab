// Write your solution in this file!
// Write your solution in this file!

// Global variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a burger
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Block scope
if(true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);

    function changeFeaturedDrink() {
        featuredDrink = 'The JavaShake';
    }
}

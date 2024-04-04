
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


// *******************using forEach***********************
const breakfastTotalItems = document.getElementById("breakfastTotalItems");
const breakfastMenuItems = document.getElementById("breakfastMenuItems");

// get the total item
breakfastTotalItems.innerHTML = "<b>total items: </b>" + breakfastMenu.length;

breakfastMenu.forEach((item, index) => {
    const breakfast = document.createElement('p');
    breakfast.innerText = (index + 1) + ' - ' + item;
    breakfastMenuItems.appendChild(breakfast);
});

// *******************using map***********************
const maincourseTotalItems = document.getElementById("maincourseTotalItems");
const maincourseMenuItems = document.getElementById("maincourseMenuItems");

// get the total item
maincourseTotalItems.innerHTML = "<b>total items: </b>" + mainCourseMenu.length;

const maincourseMenuItemsHTML = mainCourseMenu.map((item, index) => `<p>Item ${index + 1}: ${item} </p>`).join('');
maincourseMenuItems.innerHTML = maincourseMenuItemsHTML;


// *******************using normal for***********************
const dessertTotalItems = document.getElementById("dessertTotalItems");
const dessertMenuItems = document.getElementById("dessertMenuItems");

// get the total item
dessertTotalItems.innerHTML = "<b>total items: </b>" + dessertMenu.length;

let dessertMenuItemsHTML = '';
for (let index = 0; index < dessertMenu.length; index++) {
    dessertMenuItemsHTML += `<p>Item ${index + 1}: ${dessertMenu[index]} </p>`;
}

dessertMenuItems.innerHTML = dessertMenuItemsHTML;


import { getShoppingList } from './shoppingList.js';
const shoppingList = document.querySelector('.shopping-list-container');
const backHome = document.querySelector('#back-to-home');

const render = () =>
 shoppingList.innerHTML = getShoppingList();

render()

// const addBtn = document.querySelector('#add-btn');
// addBtn.addEventListener('click', () =>
//   {
//     const inputField = document.querySelector('.input-field');
//     const inputForm = document.querySelector('#list-form')
//     inputField.style.display = 'flex';
//   }
// )

// This function is to go back to landingPage
const goBackHome = () => {
  window.location.href = './landing.html';
};

backHome.addEventListener('click', goBackHome);

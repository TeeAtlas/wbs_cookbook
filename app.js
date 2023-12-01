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


    document.addEventListener('DOMContentLoaded', () => {
        const roastImage = document.getElementById("roast");

        roastImage.addEventListener('click', () => {
            window.location.href = "http://127.0.0.1:5500/wbs_cookbook/receipes.html";
        });
    });


    document.addEventListener('DOMContentLoaded', () => {

        const redirectBtn = document.getElementById("chefVideosSection");

            redirectBtn.addEventListener('click', () => {
                window.location.href = "https://www.youtube.com/watch?v=UsD1MhKBmD4&t=232s";
    
    });

      
// This function is to go back to landingPage
const goBackHome = () => {
  window.location.href = './landing.html';
};

backHome.addEventListener('click', goBackHome);


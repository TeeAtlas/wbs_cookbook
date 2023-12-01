import { shoppingListData } from './data/shoppingListData.js';

export const getShoppingList = () => {
  let shoppingListHtml = '';

  shoppingListData.forEach(ingridient => {
    const { ingridientName } = ingridient;
    const idName = ingridientName.toLowerCase().replace(' ', '');

    // Update HTML
    shoppingListHtml += ` 
      <div class="col-12 wrapper">
        <label class="col-10" for=${idName}>${ingridientName}</label>
        <input
          class="col-1"
          type="checkbox"
          id=${idName}
          name="shopping-list"
        />
      </div>
    `
  });
  // add plus button
  shoppingListHtml += `
    <div class="icon-holder">
      <i class="fa-solid fa-plus" id="add-btn"></i>
    </div>`
  return shoppingListHtml;
}

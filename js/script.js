const addBtn = document.querySelector('#addItem');
const removeBtn = document.querySelector('#removeItem');
const todoItem = document.querySelector('#todoItem');
let count = 0;

addBtn.onclick = function (event) {
  event.preventDefault();
  count++;
  let itemClass = 'odd';
  if (count % 2 === 0) {
    itemClass = 'even';
  }
  document.querySelector('#itemsList').innerHTML += `
  <div class=${itemClass}">
  <h2>${todoItem.value}</h2>
</div>
  `;
};

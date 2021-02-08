const addBtn = document.querySelector('#addItem');
const removeBtn = document.querySelector('#removeItem');
const todoItem = document.querySelector('#todoItem');
const error = document.querySelector('.errorDiv');
let count = 0;

addBtn.onclick = function (event) {
  event.preventDefault();
  count++;
  let itemClass = 'odd';
  if (count % 2 === 0) {
    itemClass = 'even';
  }
  if (!todoItem.value.trim()) {
    console.log('ERROR');
    error.innerHTML = `
    <div class="errorMSG"
    <h2>Please write valid input! </h2>
    </div>
    `;
    error.style.display = 'block';
    count--;
    setTimeout(function () {
      error.innerHTML = ``;
      error.style.display = 'none';
    }, 3000);
  } else {
    document.querySelector('#itemsList').innerHTML += `
  <div class="${itemClass}">
  <h2>Number: ${count} </h2>
  <h2>Todo: ${todoItem.value.trim()}</h2>
</div>
  `;
  }

  todoItem.value = '';
};

removeBtn.onclick = function (event) {
  event.preventDefault();
  document.querySelector('#itemsList').innerHTML = ``;
  count = 0;
};

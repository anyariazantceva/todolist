let itemsArray = [];

let itemsList = document.querySelector('.app__list');
const createElement = () => {
    let newElem = document.createElement('li');
    newElem.classList.add('app__list-item');
    return newElem
};

const loadItems = (arr) => {
    arr.forEach((item, index) => {
        let newElem = createElement();
        newElem.innerHTML = `<div class="app__item-title"><span class="item__num">${index + 1}</span>. ${item.value}</div>
              <div class="app__edit">
                   <button class="btn btn-edit" onclick="editTodo(${item.id})">Edit</button>
              </div>
              <div class="app__delete">
                   <button class="btn btn-delete" onclick="deleteItem(${item.id})">Delete</button>
              </div>`;
        itemsList.appendChild(newElem);
    });
};


const addItem = () => {
    let formValue = document.querySelector('.form__control').value;
    if(formValue !== '') {
        let formElem = {
            id: 0,
            value: formValue,
            important: false,
            done: false
        };
        itemsArray.push(formElem);
        itemsList.innerHTML = '';
        loadItems(itemsArray);
        countTodos();

    } else {
            alert('Enter a value');
        }

};

const addBtn = document.querySelector('.form__btn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
    document.querySelector('.form__control').value = '';
});

function deleteItem(id) {
    let newArr = itemsArray.splice(id, 1);
    itemsList.innerHTML = '';
    loadItems(newArr);
    countTodos();
}


// Count todos
const countTodos = () => {
    let itemsList = document.querySelectorAll('.app__list-item');
    let status = document.querySelector('.app__status');
    let newCounter = 0;
    itemsList.forEach((item) => {
        return newCounter++
    });

    status.innerHTML = `Total: ${newCounter}`;
};

const editTodo = (id) => {
    let selectedItem = itemsArray.find((item) => {
        return item.id === id;
    });
    console.log(selectedItem);

};





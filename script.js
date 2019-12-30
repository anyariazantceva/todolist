let itemsArray = [
    {
        id: 1,
        value: 'Make Coffee',
        important: false,
        done: false
    },
    {
        id: 2,
        value: 'Wash Dishes',
        important: false,
        done: false
    },
    {
        id: 3,
        value: 'Learn Finnish',
        important: false,
        done: false
    },

];

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
                   <button class="btn btn-edit">Edit</button>
              </div>
              <div class="app__delete">
                   <button class="btn btn-delete">Delete</button>
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
        } else {
            alert('Enter a value');
        }

};

let addBtn = document.querySelector('.form__btn');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
   document.querySelector('.form__control').value = '';
});

window.addEventListener('load', () => {
   loadItems(itemsArray);
});
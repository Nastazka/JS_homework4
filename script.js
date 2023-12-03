// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItem = document.querySelectorAll('.dropdown-item');
dropdownItem.forEach(dropdownItem => {
    dropdownItem.classList.add('super-dropdown');
});
console.dir(dropdownItem);



// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

// const Button = document.querySelector('.btn');

// function toggleSecondaryClass(el) {
//     const hasSecondaryClass = el.classList.contains('btn-secondary');
//     if (hasSecondaryClass) {
//         el.classList.remove('btn-secondary');
//     }
//     // else {
//     //     el.classList.add('btn-secondary');
//     // }
// }

// toggleSecondaryClass(Button);



// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

// const menuElement = document.querySelector('.menu');
// menuElement.classList.remove('dropdown-menu');




// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

// function findDropdownDiv() {
//     const dropdownElements = document.querySelectorAll('.dropdown');
//     for (const dropdownElement of dropdownElements) {
//         if (dropdownElement.tagName === 'DIV') {
//             return dropdownElement;
//         }
//     }
//     return null;
// }

// const element = findDropdownDiv();
// console.dir(element);
// element.insertAdjacentHTML('afterend','<a href="#">link</a>');





// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

// const element = document.querySelector('#dropdownMenuButton');
// element.id = 'superDropdown';
// console.dir(element);




// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

// const element = document.querySelector('[aria-labelledby=dropdownMenuButton');
// element.dataset.dd = '3';
// console.dir(element);



// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

// const element = document.querySelector('.dropdown-toggle');
// element.removeAttribute('type');
// console.log(element);
// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

const categoriesItemEl = document.querySelectorAll('.item');
// console.log(categoriesItemEl);
console.log(`В списке ${categoriesItemEl.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// -Категория: Животные
// -Количество элементов: 4

categoriesItemEl.forEach(el => {
    // console.log(el);
    console.log(`Категория: ${el.childNodes[1].textContent}`);
    console.log(`Количество элементов: ${el.childNodes[3].children.length}`);
});


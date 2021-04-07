// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.

const categoriesItemEl = document.querySelectorAll('li.item');
console.log(categoriesItemEl);
console.log(`В списке ${categoriesItemEl.length} категории.`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка 
// элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:
// -Категория: Животные
// -Количество элементов: 4

const categoriesTitleEl = document.querySelector('li.item h2');
const categoriesLiEl = document.querySelectorAll('.item li');
console.log(
    `Категория: ${categoriesTitleEl.textContent}
Количество элементов: ${categoriesLiEl.length}`
);
console.log(categoriesTitleEl.childNodes);

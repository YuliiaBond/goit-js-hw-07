// Задание 2
// В HTML есть пустой список ul#ingredients.

// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredientsEl = document.querySelector('#ingredients');

const makeIngredients = options => {
  return options.map(option => {
    const itemEl = document.createElement('li');
    itemEl.textContent = option;

    return itemEl;
  });
};

const elements = makeIngredients(ingredients);
ingredientsEl.append(...elements);
// console.log(elements);
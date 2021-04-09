// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// Используй массив объектов images для создания тегов img вложенных в li.Для создания разметки используй
// шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
// console.log(galleryEl);

// // ------1-й способ------
// const makeGallery = ({ url, alt }) => {
//   const itemEl = document.createElement('li');

//   const imagesEl = document.createElement('img');
//   imagesEl.src = url;
//   imagesEl.alt = alt;
//   imagesEl.width = 320;
  
//   itemEl.append(imagesEl);

//     return itemEl;
// };
// const elements = images.map(makeGallery);
// console.log(elements);
// galleryEl.append(...elements);

// ------2-й способ------
const makeGallery = ({ url, alt }) => {
  return `<li class='item'><img alt="${alt}" src="${url}" class='photo'></img></li>`;
};

const elements = images.map(makeGallery).join('');

galleryEl.insertAdjacentHTML('afterbegin', elements);

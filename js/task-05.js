// Задание 5

// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой, 
// в спане должна отображаться строка 'незнакомец'.

const refs = {
    input: document.querySelector('.js-input'),
    name: document.querySelector('.js-name'),
};

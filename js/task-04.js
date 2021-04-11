// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// -Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// -Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// -Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
const counterValue = {
    value: 0,    
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
}
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    console.log('Кликнули на декремент');
    
    counterValue.decrement();
    console.log(counterValue);
    valueRef.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', () => {
    console.log('Кликнули на инкремент');
    
    counterValue.increment();
    console.log(counterValue);
    valueRef.textContent = counterValue.value;
});

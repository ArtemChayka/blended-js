// =========================================================================================================
// Завдання 1:

// const { createElement } = require("react")

// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список
// 1
const body = document.querySelector('body')
 console.log(body);
// 2
const title = document.querySelector('#title')
 console.log(title);
// 3
const list = document.querySelector('.list')
 console.log(list);
// 4
const El = [...document.querySelectorAll('[data-topic]')]
 console.log(El);
// 5
const elFirst = El[0]
 console.log(elFirst);
// 6
const elLast = El[El.length - 1]
console.log(elLast);
// 7
 console.log(title.previousSibling);
 console.log(title.previousElementSibling);
 console.log(title.nextSibling);
console.log(title.nextElementSibling);
// 8
const subtitle = [...document.querySelectorAll('h3')]
console.log(subtitle);
console.log(subtitle[0]);
console.log(subtitle[1]);
console.log(subtitle[2]);
console.log(subtitle[3]);
console.log([subtitle]);
// 9
subtitle.forEach(i => {
    i.classList.add('active')
    console.log(i);
})
// 10
const navigationEl = document.querySelector('[data-topic="navigation"]');
console.log(navigationEl);
// 11
navigationEl.style.backgroundColor = 'yellow'
// 12
navigationEl.lastElementChild.textContent = "Я змінив тут текст!"
console.log(navigationEl.lastElementChild);
console.log(navigationEl.firstElementChild);
// 13, 14
const currentTopic = "manipulation"
El.forEach(i => {
    console.log(i);
    if (i.dataset.topic === currentTopic) 
        i.style.backgroundColor = 'blue'
})

// 15
subtitle.forEach(i => {
    if (i.classList.contains('completed')) console.log(i);
})

// 16
El.forEach(i => {
    if (i.firstElementChild.classList.contains('completed')) i.remove()
})

// 17
const p = document.createElement('p')
p.textContent = "Об'єктна модель документа (Document Object Model)"
title.insertAdjacentElement('afterend', p)
// 18
const listItem = document.createElement('li')
const itemTitle = document.createElement('h3')
const itemText = document.createElement('p')
// itemTitle.textContent = "Властивість innerHTML"
// itemText.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"
// listItem.append(itemTitle, itemText)
// list.append(listItem)

// 19
list.insertAdjacentHTML('beforeend', `<li><h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>`)

// 20
const liItem = [...document.querySelectorAll('li')]
console.log(liItem);
console.log(El);    // список li відрізняється (містить раніше видалений li)


liItem.forEach(i => i.remove())




// =========================================================================================================
// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const container = document.createElement('div')
// container.classList.add('number-container')
// const frag = document.createDocumentFragment()
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const list = document.querySelector('.list')
// const p = document.createElement('p')
// p.classList.add('task-title')
// p.textContent = 'Task 2'

// for (let i = 0; i < 100; i++) {
//     const block = document.createElement('div')
//     block.classList.add('number')
//     block.append(randomNumber())
//     block.textContent % 2 === 0 ? block.classList.add('even') : block.classList.add('odd')
//     frag.appendChild(block)
// }
// container.append(frag)
// list.insertAdjacentElement('afterend', container)
// container.insertAdjacentElement('beforebegin', p)



// =========================================================================================================
// Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const input = document.querySelector('.contact-form-input')
// const checkbox = document.querySelector('.contact-form-checkbox')
// const form = document.querySelector('.contact-form')
// const span = document.querySelector('.js-username-output')

// // input
// input.addEventListener('input', (event) => {
//     if (input.value.trim().length >= 6) {       // input === event.target
//         input.classList.add('success')
//         input.classList.remove('error')
//     } else {
//         input.classList.add('error')
//         input.classList.remove('success')
//     }
//     event.target.value === '' ? span.textContent = 'Anonymous' : span.textContent = input.value
// })

// // focus
// input.addEventListener('focus', (event) => {
//     if (input.value.trim() == '') { input.style.outline = '3px solid red' }
//     else { input.style.outline = '3px solid green' }
// })

// // blur
// input.addEventListener('blur', (event) => {
//     if (input.value.trim() == '') { input.style.outline = '3px solid red' }
//     else { input.style.outline = '3px solid lime' }
// })

// // submit
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     if (input.value.trim() == '' || checkbox.checked == false) {
//         alert('Fields shouldn\'t be empty')
//         return
//     }
//     console.log(event);
//     console.log(event.target);

//     const obj = {}
//     obj.userName = form.elements.userName.value     // form === event.target
//     obj.isChecked = form.elements.accept.checked
//     console.log(obj);
//     span.textContent = "Anonymous"
//     form.reset()
// })


// =========================================================================================================
// Завдання 4:

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const btnDecrease = document.querySelector('.js-decrease')
// const btnIncrease = document.querySelector('.js-increase')
// const box = document.querySelector('.box')

// btnDecrease.addEventListener('click', (event) => {
//     console.log(event);
//     let widthOffset = event.target.previousElementSibling.offsetWidth
//     let heightOffset = event.target.previousElementSibling.offsetHeight
//     box.style.width = widthOffset - 20 + 'px'
//     box.style.height = heightOffset - 20 + 'px'
// })
// btnIncrease.addEventListener('click', (event) => {
//     console.log(event);
//     let widthOffset = event.target.previousElementSibling.previousElementSibling.offsetWidth
//     let heightOffset = event.target.previousElementSibling.previousElementSibling.offsetHeight
//     box.style.width = widthOffset + 20 + 'px'
//     box.style.height = heightOffset + 20 + 'px'
// })



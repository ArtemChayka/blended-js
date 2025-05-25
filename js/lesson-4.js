// Завдання 1:

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


// Завдання 2:

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

console.clear()
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

const input = document.querySelector('.contact-form-input')
const checkbox = document.querySelector('.contact-form-checkbox')
const form = document.querySelector('.contact-form')
const span = document.querySelector('.js-username-output')

// input
input.addEventListener('input', (event) => {
    if (event.target.value.trim().length >= 6) {
        event.target.classList.add('success')
        event.target.classList.remove('error')
    } else {
        event.target.classList.add('error')
        event.target.classList.remove('success')
    }
    event.target.value.trim() === '' ? span.textContent = "Anonymous" : span.textContent = event.target.value.trim()
})

// focus
input.addEventListener('focus', (event) => {
    if (event.target.value.trim() == '') { event.target.style.outline = '3px solid red' }
    else { event.target.style.outline = '3px solid green' }
})

// blur
input.addEventListener('blur', (event) => {
    if (event.target.value.trim() == '') { event.target.style.outline = '3px solid red' }
    else { event.target.style.outline = '3px solid lime' }
})

// submit
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (input.value.trim() == '' || checkbox.checked == false) {
        alert('Fields shouldn\'t be empty')
        return
    }
    console.log(event);
    const obj = {}
    obj.userName = event.target.elements.userName.value
    obj.isChecked = event.target.elements.accept.checked
    console.log(obj);
    span.textContent = "Anonymous"
    form.reset()
})


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



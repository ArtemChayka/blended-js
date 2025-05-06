//===================================================================================================
//Завдання 1:
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blue']
// styles.push('rock-n-roll');
// let findIndexBlues = styles.indexOf('blues')
// if (findIndexBlues != -1) styles[findIndexBlues] = 'classic'
// console.log(styles);

// function logItems(array) {
//     for (i = 0; i < array.length; i++) {
//         console.log(i + 1, array[i]);
//     }
// }
// logItems(styles)



//===================================================================================================
//Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".



// const logins = ["Peter", "John", "Igor", "Sasha"];
// let userName = prompt().toLowerCase()
// function checklogins(array) {
//     for (const item of array) {
//         let newItem = item.split('').splice(1)
//         let res = [item[0].toLowerCase(), ...newItem].join('')
//         if (res === userName) return alert(`Welcome, ${userName}`)
//     }
//     return alert("User not found")
// }
// checklogins(logins)


//===================================================================================================
//Завдання 3:

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
//
// function caclculateAverage(...arr) {
//     let sum = 0
//     for (const item of arr) {
//         if (Number.isFinite(item)) {
//             sum += item
//         }
//     }
//     return sum / arr.length
// }
// console.log(caclculateAverage(-5, 0, 5, 110, true, false, '', 'Artem', null, NaN, undefined))



//===================================================================================================
//  Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function foo(arr) {
//     const res = []
//     for (let i = 0, j = 1; j < arr.length; i++, j++) {
//         res.push(arr[i] + arr[j])
//     }
//     return res
// }
// console.log(foo(someArr));



//===================================================================================================
//  Завдання 5
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.


const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, '-78', -78];
// console.log(numbers.indexOf(Math.min(...numbers))); // 10
function findSmallestNumber(numbers) {
    return Array.isArray(numbers) ? Math.min(...numbers) : 'Sory, it is not an array!'
}
console.log(findSmallestNumber(numbers))


//===================================================================================================
//  Завдання 6:

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// const findLongestWord = function (string) {
//     const arr = string.split(' ')
//     console.log(arr);
//     let longest=''
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].length>longest.length) longest=arr[i]
//     }
//     return longest

// }

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'




//===================================================================================================
//  Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
// };

// function foo() {
//     user.mood = 'happy'
//     user.hobby = 'skydiving'
//     user.premium = false
//     keys = Object.keys(user)
//     for (let item of keys) {
//         console.log(`${item} : ${user[item]}`);
//     }
// }

// ЧЕРЕЗ for ... in
// function foo() {
//     user.mood = 'happy'
//     user.hobby = 'skydiving'
//     user.premium = false
//     // keys = Object.keys(user)
//     for (let key in user) {
//         console.log(`${key} : ${user[key]}`);
//     }
// }

// foo()




//===================================================================================================
//  Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
// function foo(obj) {
//     if (Object.keys(obj).length !== 0) {
//         let sum = 0
//         for (const key in obj) {
//             sum += obj[key]
//         }
//         return sum
//     }
//     return 0
// }
// console.log(foo(salaries))


//===================================================================================================
//  Завдання 9:


// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.a = a,
//         this.b = b
//     },
//     sum() {
//         if (!this.exist()) {
//             return 'No such propeties'
//         }
//         return this.a + this.b
//     },
//     mult() {
//         if (!this.exist()) {
//             return 'No such propeties'
//         }
//         return this.a * this.b
//     },
//     exist() {
//         return this.a != null && this.b != null
//     }

// }
// calculator.read(5,10)
// console.log(calculator.sum());
// console.log(calculator.mult());




//===================================================================================================
//  Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];


// через forEach
// const calcTotalPrice = function (fruits, fruitName) {
//     let total = 0
//     fruits.forEach(i => {
//         if (i.name == fruitName) {
//             total += i.price * i.quantity
//         }
//     });
//     return total
// }
// console.log(calcTotalPrice(fruits, 'Виноград'));



// циклом for ... of
// const calcTotalPrice = function (fruits, fruitName) {
//     let total = 0
//     for (i of fruits) {
//         if (i.name === fruitName) {
//             total += i.price * i.quantity
//         }
//     }
//     return total
// }
// console.log(calcTotalPrice(fruits, 'Банан'));








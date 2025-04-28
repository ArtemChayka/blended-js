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


// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, '-78', -78];
// console.log(numbers.indexOf(Math.min(...numbers))); // 10
// function findSmallestNumber(numbers) {
//     return Array.isArray(numbers) ? Math.min(...numbers) : 'Sory, it is not an array!'
//     // if (Array.isArray(numbers)) {
//     //     for (let item of numbers) {
//     //         if (!Number.isFinite(item)) return `${item} is not a number`
//     //     } return Math.min(...numbers)
//     // } else return 'Sory, it is not an array!'
// }
// console.log(findSmallestNumber(numbers))







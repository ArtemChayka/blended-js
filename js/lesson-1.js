//Завдання 1

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number = +prompt()
// switch (number) {
//     case 10: alert("Вірно")
//         break
//     default: alert("Невірно")
// }




//Завдання 2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min >= 0 && min <= 15) {alert(`${min} входить у першу чверть`)}
// if (min > 15 && min <= 30) { alert(`${min} входить у другуу чверть`) }
// if (min > 30 && min <= 45) { alert(`${min} входить у третю чверть`) }
// if (min > 45 && min <= 60) { alert(`${min} входить у четвертуу чверть`) }





//Завдання 3:

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// let num = prompt();
// let result;
// switch (num) {
//     case '1': console.log(result='зима')
//         break;
//     case '2': console.log(result = 'весна')
//         break;
//     case '3': console.log(result = 'літо')
//         break;
//     case '4': console.log(result = 'осінь')
//         break;
//     default: alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно")
// }



//Завдання 4
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// let num = prompt()
// function findTime(num) {
//     return `${String(Math.floor(num / 60)).padStart(2, '0')} : ${String((num % 60)).padStart(2, '0')}`
// }
// console.log(findTime(num))




//===================================================================================================
// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]
// const arr = numbers.map(i=>Math.pow(i,2))
// console.log(arr);


//===================================================================================================
// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const arr = data.flatMap(i => i.values)
// console.log(arr);


//===================================================================================================
// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(people.some(i=>i.age<20));


//===================================================================================================
// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// console.log(numbers.every(i => i % 2 === 0))


//===================================================================================================
// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// console.log(numbers.find(i=>i%2!==0))



//===================================================================================================
// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 27, 5, 1, 3];
// console.log(numbersArray.toSorted((a,b)=>a-b))


//===================================================================================================
// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// console.log(stringArray.toSorted())
// console.log(stringArray.toSorted((a,b)=>a.localeCompare(b)));


//===================================================================================================
// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(users.toSorted((a, b) => a.age - b.age)) // Зростання
// console.log(users.toSorted((a, b) => b.age - a.age)) // Спадання


//===================================================================================================
// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// console.log(user.filter(i=>i.age>20))


//===================================================================================================
// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((acc,item)=>acc+item))            // без ПЕРШОГО параметру
// console.log(numbers.reduce(((acc, item) => acc + item), 0))  // з ПЕРШИМ параметром


//===================================================================================================
// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

class Calculator {
    constructor(value) {
        this.value = value
        return this
    }
    number(value) {
        this.value = value
        return this
    }
    add(n) {
        this.value = this.value + n
        return this
    }
    minus(n) {
        this.value = this.value - n
        return this
    }
    multiply(n) {
        this.value = this.value * n
        // return this               // метод має повертати ОБЄКТ this щоб наступний метод міг взяти з нього value; якщо небуде return то наступний метод буде працювати з undefined
    }
    devide(n) {
        if (this.value == 0) console.log('неможливість ділення');
        this.value = this.value / n
        return this              // метод має повертати ОБЄКТ this
    }

    getResult() {
        return this.value
    }
}
// Приклад використання:
const calc = new Calculator(10); // ПЕРЕДАЄМО арг в парметр constructor
console.log(calc);


// const result = calc
// .number(10)             // Встановлюємо (ПЕРЕІНІЦІАЛІЗОВУЄМО) початкове значення 10
// .add(5)                 // Додаємо 5 (10 + 5 = 15)
// .minus(3)               // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4)            // Множимо на 4 (12 * 4 = 48)
// .devide(2)              // Ділимо на 2 (48 / 2 = 24)
// .getResult()            // Отримуємо результат: 24
// console.log(result);

console.log(calc.number(10));
console.log(calc.add(5));
console.log(calc.minus(3));
console.log(calc.multiply(4)); // undefined БО НЕМА return
console.log(calc);             // Calculator {value: 48}  // В ОБЄКТІ value зміниться на 48 АЛЕ 
console.log(calc.devide(2));   // УВАГА на 179 рядок; ФУНКЦІЯ поверне undefined і ЛАНЦЮЖОК МЕТОДІВ припиниться бо неможливо виконати наступний метод з undefined.devide(2) хоча В ОБЄКТІ value зміниться
console.log(calc.getResult());


//===================================================================================================
//Завдання 12:

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//     #login
//     #email
//     constructor(login,email) {
//         this.#login = login,
//             this.#email=email
//     }
//     get email() {
//         return this.#email
//     }
//     set email(newEmail) {
//         if (newEmail === '') {
//             console.log('Має бути не пустий рядок');
//         } else { this.#email = newEmail }
//     }
//     get login() {
//         return this.#login
//     }
//     set login(newLogin) {
//         if (newLogin === '') {
//             console.log('Має бути не пустий рядок');
//         } else { this.#login = newLogin }
//     }
// }
// const user = new Client('doctor', 'drch@gmail.comm')
// console.log(user.email);
// console.log(user.login);
// console.log(user.email = "mango@supermail.com");
// console.log(user.login = "repetitor");
// console.log(user.email);
// console.log(user.login);


//===================================================================================================
//Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює



// class Person {
//     constructor(obj) {
//         this.name = obj.name,
//             this.age = obj.age,
//             this.gender = obj.gender,
//             this.email = obj.email
//     }
//     getDetails() {
//         return this
//     }
// }
// class Employee extends Person {
//     constructor(obj2, status) { // додали ще один аргумент окремо від обєкту
//         super(obj2, status)
//         this.salary = obj2.salary
//         this.department = obj2.department
//         this.status = status
//     }
//     getEmployeeDetails() {
//         const obj3 = {}
//         obj3.salary = this.salary
//         obj3.department = this.department
//         // console.log(this);
//         return obj3
//     }
// }
// const artem = new Person({ name: 'Artem', age: 34, gender: 'Male', email: 'drchay@gmail.com', lastName: 'Chaichenko', city: 'Kyiv' })
// console.log(artem);
// console.log(artem.getDetails());

// const katya = new Employee({ salary: 340, department: 'Furnitur', lastName: 'Porokhivnyk', city: 'Vyshneve' }, 'wife') // super наслідує всі КЛЮЧІ від БАТЬКівського constructor()
// console.log(katya);
// console.log(katya.getEmployeeDetails());



// let number = 1;
//
// (function () {
//   let number = 2;
//   console.log(number);
//
//   return console.log(number + 3);
// }())
//
// console.log(number);


let user = (function () {
  let privat = function () {
    console.log('I am privat');
  };

  let sayHello = function () {
    console.log('Hello');
  };
  return {
    sayHello: sayHello, privat
  };

}())

console.log(user.sayHello());
console.log(user.privat());


const myModule = require('../js/first.js');

let myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();









// function User(name, age) {
//   this.name = name;
//   let userAge = age;
//
//   this.say = function () {
//     alert(`Имя пользователя: ${this.name}, возраст: ${userAge}`)
//   }
//   this.getAge = function () {
//     return userAge
//   }
//   this.setAge = function (age) {
//     if (typeof age === 'number' && age > 0 && age < 110 ) {
//       userAge = age;
//     } else {
//       console.log('Недопустимое значение');
//     }
//   }
// }
//
// let ivan = new User('Ivan', 25);
//
// console.log(ivan.name);
// console.log(ivan.getAge());
//
//
// ivan.age = 30;
// ivan.name = 'Alex';
// ivan.setAge(33);
// console.log(ivan.getAge());
//
// ivan.say();


// let request = new XMLHttpRequest();
// // 1) Создаем обьект запроса

// request.open("GET", 'server.php', true, login, password);

// // 2) Настройка запроса

// request.send()

// // 3) Отправили запрос

// request.status
// request.statusText
// request.responseText
// request.readyState

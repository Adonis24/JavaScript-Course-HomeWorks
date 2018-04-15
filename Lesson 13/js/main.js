// let age = document.getElementById('age');
//
// function showUser(surname, name) {
// 				 this.value = age.value;
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 				 console.log(this.value);
// }
//
// console.log(age.value);
// showUser('Chernii', 'Artem');

// let age = document.getElementById('age');
//
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 				 console.log(age.value);
// }
//
// console.log(age.value);
// showUser('Chernii', 'Artem');

// let age = document.getElementById('age');
//
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 				 console.log(age.value);
// }
//
// console.log(age.value);
// showUser.call(age);



// function user(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function () {
// 		alert('Hello ' + this.name)
// 	}
// }
//
// user.prototype.exit = function (name) {
// 	alert("User " + this.name + " just left us");
// };
//
//
// let ivan = new user('Ivan', 23);
// let alex = new user('Alex', 20);
//
//
// console.log(ivan);
// console.log(alex);
//
// ivan.hello();
// ivan.exit();

// let user = {
// 		name : "John"
// };
//
// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }
// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
// 	return this * number;
// };
//
// let double = count.bind(2);
//
// console.log(double(3));
// console.log(double(10));


// let btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', function() {
// 	this.style.backgroundColor = 'red'
// })
// btn.addEventListener('click', () => {
// 	console.log(this)
// })

// 1) Просто вызов функции - window/undefined
// 2) Метод - this = обьект
// 3) Конструктор (new) = this = созданный обьект
// 4) Указание конкретного контекста - call, apply, bind






// "use strict"
// let num = 4;
// console.log(num);

// 'use strict'
// function showThis(a,b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b
// 	}
// 	console.log(sum());
// }
//
// showThis(4,5);
// showThis(6,6);

// let obj = {
// 	a : 20,
// 	b : 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// }
//
// obj.sum();

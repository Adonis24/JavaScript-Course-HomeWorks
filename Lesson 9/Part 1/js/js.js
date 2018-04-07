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

let age = document.getElementById('age');

function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
				 console.log(age.value);
}

console.log(age.value);
showUser.call(age, 'Artem' , ' Chernii');
showUser.apply(age, ['Artem', 'Chernii']);

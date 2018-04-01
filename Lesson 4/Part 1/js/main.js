// let options = {
//   name: 'test',
//   width: 1024,
//   height: 1024
// }
//
// options.bool = false;
// options.colors = {
//   border: 'black',
//   background: 'red'
// }
//
// delete options.bool
//
// for (let key in options) {
//   console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
//
//
// console.log(Object.keys(options).length);

// let first = [1,'second' ,3,4,5];

// console.log(arr.pop());

// arr.push(6);

// arr.shift();

// arr.unshift(0);


// first[99] = 99;

// for (var i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }
//
// console.log(first.length);
//
// first.forEach(function(item, i, arr) {
//     console.log(i + ': ' + item + '(array: ' + arr + ')');
// })


// let first = [];
// let i = prompt('', '')
// first = i.split(', ')

// let first = ["Artem", "Tania", "Yulya"];
// let i = first.join(',')

// let first = ['zzz', 1 , 'Artem', 5 , 'Barsik' , 'Class'];
// let i = first.sort()

// let first = [1, 15 , 25, 55]
//
// function sortNumbers(a,b) {
//   return a - b;
// }
//
// let i = first.sort(sortNumbers);
//
// console.log(i);

let soldier = {
  health: 400,
  armor: 100
}
 let john = {
   health: 100
 }

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

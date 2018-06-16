let btn   = document.getElementsByClassName('btn')[0];

function animation() {
  let steps = 0,
  objct = document.getElementsByClassName('object')[0],
  id    = setInterval(move, 500);

  function move() {
    if (steps == 100) {
      clearInterval(id)
    } else {
      steps += 5;
      objct.style.padding = steps + 'px';
      objct.style.borderRadius = steps + 'px';
      objct.style.width = steps + 'px';
      requestAnimationFrame(move);
    }
  }
}

btn.addEventListener('click', animation);






// let arr = [];
// let sumArr = 0;
// function addArrays() {
//   q   = 		prompt("Сколько массивов включить во внутрь", "3?");
//
// 	while (isNaN(q) || q == '' || q == null) {
// 		alert('Массив должен быть числом');
// 		q   = 	prompt("Сколько массивов включить во внутрь", "3?");
// 	}
//   for (var i = 0; i < q; i++) {
//     let items = prompt('Введите несколько произвольных чисел через запятую!');
//     arr[i] = items;
//     arr[i] = items.split(',');
//     sumArr = sumArr + parseInt(arr[i]);
//   }
// }
// addArrays();
// console.log(sumArr);
// console.log(arr);

// let arr = [];
// let sumArr = 0;
//
// function addArrays() {
//   q   =   prompt("Сколько массивов включить во внутрь?", "3?");
//   while (isNaN(q) || q == '' || q == null) {
//     alert("Массив должен быть числом");
//     q   =   prompt("Сколько массивов включить во внутрь?", "3?");
//   }
//   for (let i = 0; i < q; i++) {
//     arr[i] = [];
//     for (let z = 0; z < 5 ; z++) {
//       arr[i][z] = Math.floor(Math.random()*(1000-1));
//       sumArr = sumArr + parseInt(arr[i][z]);
//     }
//   }
//   console.log(sumArr);
// }
// addArrays();
// console.log(arr);












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

// let soldier = {
//   health: 400,
//   armor: 100
// }
//  let john = {
//    health: 100
//  }
//
// john.__proto__ = soldier;
//
// console.log(john);
// console.log(john.armor);

// let btn = document.getElementsByTagName('button');
// let overlay = document.querySelector('.overlay');
// let link = document.getElementsByTagName('a');
//
// link[0].addEventListener('click', function(event) {
//   event.preventDefault();
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });
//
// btn[0].addEventListener('click', function functionName() {
//   alert('You clicked the button!');
// });
// btn[0].addEventListener('mouseleave', function functionName() {
//   alert('You left me!');
// });
// btn[1].addEventListener('mouseenter', function() {
//   console.log('Вы навели на кнопку №2');
// });
//
// btn[1].addEventListener('click', function(event) {
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });
//
// overlay.addEventListener('click', function(event) {
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });
//
// btn[2].addEventListener('click', function(event) {
//   console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// let timerId = setTimeout(func, delay, arg1, arg2...);
//
// clearTimeout(timerId);


// let timerId = setTimeout(log, 2000)// let timerId = setTimeout(log, 2000)
//
//
// function log() {
//   console.log('Hello');
//   timerId = setTimeout(log, 2000)
// }

// let btn = document.querySelector('.btn');

// function myAnimation() {
//   let elem = document.querySelector('.object'),
//   pos = 0,
//   id = setInterval(frame, 10);

//   function frame() {
//     if (pos === 300 ) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
// }

// btn.addEventListener('click', myAnimation);

// let btns = document.getElementsByTagName('button'),
// btn_block = document.querySelector('.btn-block');

// btn_block.addEventListener('click', function (event) {
//   if (event.target && event.target.matches('button.first')) {
//     console.log('Hello!')
//   }
// });







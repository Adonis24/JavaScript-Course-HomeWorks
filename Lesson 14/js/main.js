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








// let about = document.getElementsByTagName('li')[0],
// 		photo = document.getElementsByTagName('li')[1],
// 		price = document.getElementsByTagName('li')[2],
// 		contact = document.getElementsByTagName('li')[3];
//
//
//
// function scrollTo(element) {
//   window.scrollTo({
//     'behavior': 'smooth',
//     'left': 0,
//     'top': element.offsetTop
//   });
// }
// about.addEventListener('click', () => {
//   scrollTo(document.getElementById("about"));
// });
//
// photo.addEventListener('click', () => {
//   scrollTo(document.getElementById("photo"));
// });
//
// price.addEventListener('click', () => {
//   scrollTo(document.getElementById("price"));
// });






// let about = document.getElementsByTagName('li')[0],
// 		photo = document.getElementsByTagName('li')[1],
// 		price = document.getElementsByTagName('li')[2],
// 		contact = document.getElementsByTagName('li')[3];

// /**
//  *
//  * @param {(number|HTMLElement)} destination - Destination to scroll to (DOM element or number)
//  * @param {number} duration - Duration of scrolling animation
//  * @param {string} easing - Timing function name (Allowed values: 'linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint')
//  * @param {function} callback - Optional callback invoked after animation
//  */
// function scrollIt(destination, duration = 200, easing = 'linear', callback) {
//
//   // Predefine list of available timing functions
//   // If you need more, tween js is full of great examples
//   // https://github.com/tweenjs/tween.js/blob/master/src/Tween.js#L421-L737
//   const easings = {
//     linear(t) {
//       return t;
//     },
//     easeInQuad(t) {
//       return t * t;
//     },
//     easeOutQuad(t) {
//       return t * (2 - t);
//     },
//     easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//     },
//     easeInCubic(t) {
//       return t * t * t;
//     },
//     easeOutCubic(t) {
//       return (--t) * t * t + 1;
//     },
//     easeInOutCubic(t) {
//       return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
//     },
//     easeInQuart(t) {
//       return t * t * t * t;
//     },
//     easeOutQuart(t) {
//       return 1 - (--t) * t * t * t;
//     },
//     easeInOutQuart(t) {
//       return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
//     },
//     easeInQuint(t) {
//       return t * t * t * t * t;
//     },
//     easeOutQuint(t) {
//       return 1 + (--t) * t * t * t * t;
//     },
//     easeInOutQuint(t) {
//       return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
//     }
//   };
//
//
//   // Store initial position of a window and time
//   // If performance is not available in your browser
//   // It will fallback to new Date().getTime() - thanks IE < 10
//   const start = window.pageYOffset;
//   const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
//   // const startTime = typeof(window.performance['now']) == 'function' ? performance.now() : new Date().getTime();
//
//
//   // Take height of window and document to sesolve max scrollable value
//   // Prevent requestAnimationFrame() from scrolling below maximum scollable value
//   // Resolve destination type (node or number)
//   const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
//   const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
//   const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
//   const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset - 70);
//
//
//   // If requestAnimationFrame is not supported
//   // Move window to destination position and trigger callback function
//   if ('requestAnimationFrame' in window === false) {
//     window.scroll(0, destinationOffsetToScroll);
//     if (callback) {
//       callback();
//     }
//     return;
//   }
//
//
//   // function resolves position of a window and moves to exact amount of pixels
//   // Resolved by calculating delta and timing function choosen by user
//   function scroll() {
//     const now = 'now' in window.performance ? performance.now() : new Date().getTime();
//     const time = Math.min(1, ((now - startTime) / duration));
//     const timeFunction = easings[easing](time);
//     window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));
//
//     // Stop requesting animation when window reached its destination
//     // And run a callback function
//     if (window.pageYOffset === destinationOffsetToScroll) {
//       if (callback) {
//         callback();
//       }
//       return;
//     }
//
//     // If window still needs to scroll to reach destination
//     // Request another scroll invokation
//     requestAnimationFrame(scroll);
//   }
//
//   // Invoke scroll and sequential requestAnimationFrame
//   scroll();
// }
//
// // Scroll to section 1
// about.addEventListener('click', () => {
//   scrollIt(
//     document.getElementById('about'),
//     1300,
//     'easeOutQuad',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });
//
// // Scroll to section 2
// photo.addEventListener('click', () => {
//   scrollIt(
//     document.getElementById('photo'),
//     1300,
//     'easeOutQuad',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });
//
// // Scroll to section 3
// price.addEventListener('click', () => {
//   scrollIt(
//     document.getElementById('price'),
//     1300,
//     'easeOutQuad',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });
// // Scroll to section 4
// contacts.addEventListener('click', () => {
//   scrollIt(
//     document.getElementById('contacts'),
//     1300,
//     'easeInOutQuint',
//     () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
//   );
// });

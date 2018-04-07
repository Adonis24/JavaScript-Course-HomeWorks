window.addEventListener('DOMContentLoaded', function () {

	let tab 				= document.getElementsByClassName('info-header-tab'),
			tabContent 	= document.getElementsByClassName('info-tabcontent'),
			info 				= document.getElementsByClassName('info-header')[0];

	function hideTabContent (a) {
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		};
	}

	hideTabContent(1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (var i = 0;i < tab.length; i++) {
				if(target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		};
	})

 //Timer

	let deadline = '2019-04-12';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours   = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {
		let timer = document.getElementById('timer'),
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock() {
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;
					let timeInter = setInterval(updateClock, 1000);

					if (t.total <= 0 ) {
						clearInterval(timeInter);
						hours.innerHTML = '00';
						minutes.innerHTML = '00';
						seconds.innerHTML = '00';
					}
				};

				updateClock();
	};

	setClock('timer', deadline)

	function animate(draw, duration) {
		let start = performance.now();
		requestAnimationFrame(
			function animate(time) {
				let timePassed = time - start;
				if (timePassed > duration) {
					timePassed = duration;
				}

				draw(timePassed);

				if (timePassed < duration) {
					requestAnimationFrame(animate);
				}
		})
	};

	let menu = document.getElementsByTagName('nav')[0];

	menu.addEventListener('click', function(event) {
		event.preventDefault();
		animate(function(timePassed) {
			let target = event.target;
			let section = document.getElementById(target.getAttribute('href').slice(1));
			window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
		}, 1500)
	})

	//Modal

	let more    = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close   = document.querySelector('.popup-close'),
			descBtn = document.getElementsByClassName('description-btn'),
			popup   = document.querySelector('.popup');


	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		popup.classList.add('fadePop');
		document.body.style.overflow = 'hidden';
	});

	descBtn[0].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		popup.classList.add('fadePop');
		document.body.style.overflow = 'hidden';
	});
	descBtn[1].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		popup.classList.add('fadePop');
		document.body.style.overflow = 'hidden';
	});
	descBtn[2].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		popup.classList.add('fadePop');
		document.body.style.overflow = 'hidden';
	});
	descBtn[3].addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		popup.classList.add('fadePop');
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function() {
		popup.classList.remove('fadePop');
		setTimeout(function() {
			overlay.style.display = 'none';
		},500);
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});
	window.addEventListener('click', function(event) {
    if (event.target == overlay) {
        overlay.style.display = 'none';
				document.body.style.overflow = '';
    }
	});
});




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

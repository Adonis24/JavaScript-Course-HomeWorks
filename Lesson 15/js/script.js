	let tab 				= document.getElementsByClassName('info-header-tab'),
	tabContent 	= document.getElementsByClassName('info-tabcontent'),
	info 				= document.getElementsByClassName('info-header')[0];

	function hideTabContent (a) {
		for (var i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		};
	};

	hideTabContent(1);

	function showTabContent (b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

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
	});

	//Timer

	let deadline = '2018-04-25';

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
	});

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
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		statusMessage.innerHTML = '';
		statusMessage.classList.remove('status');
		document.body.style.overflow = '';
	});
	window.addEventListener('click', function(event) {
		if (event.target == overlay) {
			overlay.style.display = 'none';
			statusMessage.innerHTML = '';
			statusMessage.classList.remove('status');
			document.body.style.overflow = '';
		}
	});

	let message = new Object();
	message.loading = 'Загрузка...';
	message.succes = 'Спасибо, скоро мы с вами свяжемся';
	message.failure = 'Что-то пошло не так';

	let form = document.getElementsByClassName('main-form')[0],
	lastForm = document.getElementsByTagName('form')[0],
	lastFormInput = lastForm.getElementsByTagName('input'),
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div'),
	succesForm = document.createElement('div');

	form.addEventListener('submit', function() {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		let formData  = new FormData(form);

		request.send(formData);
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
				statusMessage.classList.add('status');
			} else if (request.readyState === 4 ) {
				if (request.status === 200 && request.status < 300) {
					statusMessage.innerHTML = message.succes;
					statusMessage.classList.add('status');
				} else {
					statusMessage.innerHTML = message.failure;
					statusMessage.classList.add('status');
				}
			}
		}
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});
	lastForm.addEventListener('submit', function() {
		event.preventDefault();
		lastForm.appendChild(succesForm);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		let formData  = new FormData(lastForm);

		request.send(formData);
		request.onreadystatechange = function() {
			if (request.readyState < 4) {
				succesForm.innerHTML = message.loading;
				succesForm.classList.add('succesForm');
			} else if (request.readyState === 4 ) {
				if (request.status === 200 && request.status < 300) {
					succesForm.innerHTML = message.succes;
					succesForm.classList.add('succesForm');
				} else {
					succesForm.innerHTML = message.failure;
					succesForm.classList.add('succesForm');
				}
			}
		}
		for (let i = 0; i < lastFormInput.length; i++) {
			lastFormInput[i].value = '';
		}

	});


	let slideIndex = 1,
	slides = document.getElementsByClassName('slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {
		if (n > slides.length) {
			slideIndex = 1;
		};
		if (n < 1) {
			slideIndex = slides.length;
		};
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		};
		for (var i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		};
		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSlides(n) {
		showSlides(slideIndex += n)
	}
	function currentSlide(n) {
		showSlides(slideIndex = n)
	}

	prev.addEventListener('click', function () {
		plusSlides(-1);
	});
	next.addEventListener('click', function () {
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});

	let person = document.getElementsByClassName('counter-block-input')[0],
	restDays = document.getElementsByClassName('counter-block-input')[1],
	place = document.getElementById('select'),
	totalValue = document.getElementById('total'),
	personsSum = 0,
	daysSum = 0,
	total = 0;

	totalValue.innerHTML = 0;

	person.addEventListener('change', function() {
		personsSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value === '' || person.value === '' || restDays.value === '0' || person.value === '0') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
			totalValue.classList.add('totalFade');
		}
	});
	restDays.addEventListener('change', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum)*4000;
		if (restDays.value === '' || person.value === '' || restDays.value === '0' || person.value === '0') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
			totalValue.classList.add('totalFade');
		}
	});

	place.addEventListener('change', function () {
		if (restDays.value === '' || person.value === '' || restDays.value === '0' || person.value === '0') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
			totalValue.classList.add('totalFade');
		}
	});

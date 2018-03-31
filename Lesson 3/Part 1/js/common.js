let budget,
		shopName,
		time,
		price

function start() {
	budget   = 		prompt("Ваш бюджет?", "100");

	while (isNaN(budget) || budget == '' || budget == null) {
		alert('Бюджет должен быть числом');
		budget   = 	prompt("Ваш бюджет?", "100");
	}

	shopName = 		prompt("Название вашего магазина?", "Aldi").toUpperCase();
	time     = 		19;
}
start();

let	mainList = {
			budget: budget,
			shopName: shopName,
			shopGoods: [],
			employers: {
				employerName: []
			},
			open: true,
			discount: false
};

function discount() {
	let discount = confirm('У вас есть купон на скидку?');
	let price = 500;
	if (discount === true) {
		price -= price*20/100;
		console.log(price);
	} else {
		console.log(price);
	}
}
discount();

function chooseGoods() {
	for (var i = 0; i < 3; i++) {

		let a = prompt("Какой тип товара будем продавать?");

		if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
			console.log('Everything is working!');
			mainList.shopGoods[i] = a;
		} else {
			alert('Введите тип товара еще раз!');
			i--;
		}
	}
}
chooseGoods();

function getEmployers() {
	for (var i = 0; i < 4; i++) {

		let name = prompt("Введите имя сотрудника");

		if ( (typeof(name)) === 'string' && (typeof(name)) !== null && name != '' && name.length < 30) {
			console.log('All Good!');
			mainList.employers[i] = [i+1] + ' ' + name;
		} else {
			alert('Имя не корректно!');
			i--;
		}
	}
}

function workTime(time) {
	if (time < 0) {
		console.log('Its not possible!');
	} else if (time > 8 && time <20) {
		console.log('Its time to work!');
	} else if (time > 24) {
		console.log('Its too late for this.');
	} else {
		console.log('We have only 24 hours in a day!');
	}
}

workTime(18);

alert(+budget/30 + " рублей");
console.log(mainList);








// >> do while
// let i = 0;
// do {
// 	let a = prompt("Какой тип товара будем продавать?");
// 	mainList.shopGoods[i] = a;
// 	i++;
// } while (i < 5);
//


// >> while
// let i = 0;
// while (i < 5) {
// 	let a = prompt("Какой тип товара будем продавать?");
// 	mainList.shopGoods[i] = a;
// 	i++;
// }

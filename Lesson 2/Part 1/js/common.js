let budget   = prompt("Ваш бюджет?", "100"),
		shopName = prompt("Название вашего магазина?", "Aldi"),
		time     = 19;
		mainList = {
			budget: budget,
			shopName: shopName,
			shopGoods: [],
			employers: {
				employerName: []
				},
			open: true
};

for (var i = 0; i < 3; i++) {

	let a = prompt("Какой тип товара будем продавать?");

	if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
		console.log('Everything is working!');
		mainList.shopGoods[i] = a;
	} else {
		alert('Введите тип товара еще раз!');
		i--;
	}

};

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

if (time < 0) {
	console.log('Its not possible!');
} else if (time > 8 && time <20) {
	console.log('Its time to work!');
} else if (time > 24) {
	console.log('Its too late for this.');
} else {
	console.log('We have only 24 hours in a day!');
}

alert(+budget/30 + " рублей");
console.log(mainList);

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
// start();

let	mainList = {
			budget: budget,
			shopName: shopName,
			shopGoods: [],
			employers: {
				employerName: []
			},
			open: false,
			discount: false,
			chooseGoods: function chooseGoods() {
				for (var i = 0; i < 3; i++) {

					let a = prompt("Какой тип товара будем продавать?", "Носок?");

					if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
						console.log('Everything is working!');
						mainList.shopGoods[i] = a;
					} else {
						alert('Введите тип товара еще раз!');
						i--;
					}
				}
			},
			workTime: function workTime(time) {
				if (time < 0) {
					console.log('Its not possible!');
				} else if (time > 8 && time <20) {
					console.log('Its time to work!');
					mainList.open = true;
				} else if (time > 24) {
					console.log('Its too late for this.');
				} else {
					console.log('We have only 24 hours in a day!');
				}
			},
			getEmployers: function getEmployers() {
				for (var i = 0; i < 4; i++) {

					let name = prompt("Введите имя сотрудника", "Валера?");

					if ( (typeof(name)) === 'string' && (typeof(name)) !== null && name != '' && name.length < 30) {
						console.log('All Good!');
						mainList.employers[i] = [i+1] + ' ' + name;
					} else {
						alert('Имя не корректно!');
						i--;
					}
				}
			},
			makeDiscount: function makeDiscount() {
				let discount = confirm('У вас есть купон на скидку?');
				let price = 500;
				if (discount === true) {
					price -= price*20/100;
					console.log(price);
				} else {
					console.log(price);
				}
			},
			dayBudget: function dayBudget() {
				alert(+budget/30 + " рублей - ваш ежедневный бюджет");
			},
			chooseShopItems: function chooseShopItems() {
				for (var i = 0; i < 1; i++) {

					let items = prompt("Перечислите через запятую товары", "");

					if ( (typeof(items)) === 'string' && (typeof(items)) !== null && items != '' && items.length < 25) {
						mainList.shopGoods[i] = items;
						mainList.shopGoods = items.split(',');
						mainList.shopGoods.push(prompt("Подождите еще ", ""));
						mainList.shopGoods.sort();
					} else {
						alert('Введите имя товара');
						i--;
					}
				}
			},
			showItems: function showItems() {
				mainList.shopGoods.forEach(function(item, i , arr){
					console.log(i+1 + ': ' + item + ' Полный список товаров ' + arr + ')');
				})
			},
			fullListShow: function fullListShow() {
				for (let i = 0; i < mainList.shopGoods.length; i++) {
					alert('Наш магазин включает в себя: ' +  mainList.shopGoods[i]);
				}
			}

};

console.log(mainList);


// discount();

// chooseGoods();

// workTime(18);




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

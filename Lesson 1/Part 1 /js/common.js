	var budget   = prompt("Ваш бюджет?", "100");
		  shopName = prompt("Название вашего магазина?", "Aldi");
		  mainList = {
		budget: 0,
		shopName: " ",
		shopGoods: [],
		employers: {
			employerName: []
		},
		open: true
	};

	mainList.shopGoods[0] = prompt("Какой тип товара будем продавать?");
	mainList.shopGoods[1] = prompt("Какой тип товара будем продавать?");
	mainList.shopGoods[2] = prompt("Какой тип товара будем продавать?");

	alert(+budget/30 + " рублей");
	console.log(mainList.shopGoods);
	var budget   = prompt("Ваш бюджет?", "100");
		  shopName = prompt("Название вашего магазина?", "Aldi");
		  mainList = {
		budget: budget,
		shopName: shopName,
		shopGoods: [],
		employers: {
			employerName: []
		},
		open: true
	};

	for (var i = 0; i < 5; i++) {
		let a = prompt("Какой тип товара будем продавать?");
		mainList.shopGoods[i] = a;

	};


	alert(+budget/30 + " рублей");
	console.log(mainList);
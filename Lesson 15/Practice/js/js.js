function sayName(name) {
	let message = "My name is " + name;

	return message;
}


let assert = require('chai').assert;

describe("sayName", function() {
	it("Получаем фразу с новым именем" , function() {
		assert.typeOf(sayName("Ivan"), 'string');
	});
});

function matH(a,b) {
	return a + b;
}
matH(2,2);

// function sayName(name) {
// 	let message = "My name is " + name;
//
// 	return message;
// }
//
// let arr = [0,1,2,3,-4,5,6];
//
// let result = arr.reduce(function(sum, elem) {
// 	return sum + elem;
// })
//
// let assert = require('chai').assert;
//
// describe("sayName", function() {
// 	it("Получаем фразу с новым именем", function() {
// 		assert.typeOf(sayName('Petya'), 'string')
// 	});
// });
//
// describe("arr", function() {
// 	it("Получаем суму числе массива" , function() {
// 		assert.equal(result, 13);
// 	});
// });

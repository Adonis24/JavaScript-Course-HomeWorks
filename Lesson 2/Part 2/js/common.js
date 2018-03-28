// let num = 50;
//
//
// if(num < 49) {
// 	console.log("Не верно");
// } else if(num > 100) {
// 	console.log("Не верно");
// } else {
// 	console.log("Верно");
// }
//
// (num == 50)? console.log("Right") : console.log("Wrong");
//
// switch (num) {
// 	case 49:
// 		console.log("Not enought");
// 		break;
// 	case 100:
// 		console.log("Too much");
// 		break;
// 	case 80:
// 		console.log("Still too much");
// 		break;
// 	case 50:
// 		console.log("Well DONE!");
// 		break;
// 	default:
// 		console.log("Not this time!");
// 		break;
//
// }
//
// // while (num < 55) {
// // 	console.log(num);
// // 	num++;
// // }
//
// // do {
// // 	console.log(num);
// // 	num++;
// // } while (num < 55);
//
// for (let i = 0; i < 8; i++) {
// 	console.log(i);
// }

// let x = 5;
//
// alert(x++);
// console.log(x);

let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		weekOpen = document.getElementById('weekopen'),
		weekList = document.getElementById('weeklist'),
		day1 = document.getElementById("day1"),
		day = document.getElementById("day"),
		day7 = document.getElementById("day7");

alert(week);

// for (var i = 0; i < 7; i++) {
// 	if (i < 5) {
// 		alert(week[i])
// 	} else if (i > 4 && i < 7) {
// 		alert(week[i])
// 	};
// }

for (var i = 0; i < 7; i++) {

	day.innerHTML = week[i];
	day1.innerHTML = week[2];
	day7.innerHTML = week[6];
};

window.addEventListener('DOMContentLoaded', function() {

	weekOpen.addEventListener('click', () => {
		weeklist.style.display = 'flex';
	})


});





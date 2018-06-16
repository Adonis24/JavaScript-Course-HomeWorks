window.addEventListener('DOMContentLoaded', function () {

	var listItems = document.getElementById("our-list").getElementsByTagName("li");
	let helloBtn = document.getElementsByClassName('hello_button')[0];
	let ourHeadline = document.getElementById("our-headline");
	let addBtn = document.getElementById("add_button");
	let ourList = document.getElementById("our-list");
	let countingItems = 6;




	helloBtn.addEventListener("click", function(e) {
		for (let i = 0; i < listItems.length; i++) {
			listItems[i].innerHTML = "HelloWorld";
		}
		if (e.target && e.target.matches('button.hello_button')) {
			console.log('Hello');
		}
	});
	
	ourList.addEventListener("click", activateItem);
	
	function activateItem(e) {
		if (e.target.nodeName == "LI") {
			ourHeadline.innerHTML = e.target.innerHTML;
			for (let i = 0; i < e.target.parentNode.children.length; i++) {
				e.target.parentNode.children[i].classList.remove("active");
			}
			e.target.classList.add("active");
		}
	}
	
	addBtn.addEventListener("click", creatNewItem);
	
	function creatNewItem() {
		ourList.innerHTML += "<li>"+ countingItems +"- item</li>";
		countingItems++;
		clearTimeout(timerId);
	}
	
	
	function Person(fullName, favColor) {
		this.name = fullName;
		this.favoriteColor = favColor;
		this.greet =  function () {
			console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favoriteColor + ".");
		}
	}
	
	
	let Artem = new Person("Artem Chernii", "black");
	
	console.log(Artem.name);

});


function log() {
  console.log('Hello');
  timerId = setTimeout(log, 2000)
}

log();

let arr = [];
let sumArr = 0;

function addArrays() {
  q   =   prompt("Сколько массивов включить во внутрь?", "3?");
  while (isNaN(q) || q == '' || q == null) {
    alert("Массив должен быть числом");
    q   =   prompt("Сколько массивов включить во внутрь?", "3?");
  }
  for (let i = 0; i < q; i++) {
    arr[i] = [];
    for (let z = 0; z < 5 ; z++) {
      arr[i][z] = Math.floor(Math.random()*(1000-1));
      sumArr = sumArr + parseInt(arr[i][z]);
    }
  }
  console.log(sumArr);
}
addArrays();
console.log(arr);
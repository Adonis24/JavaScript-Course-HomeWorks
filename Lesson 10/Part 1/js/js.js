class options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg  = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  textAdd() {
    var div = document.createElement('div');
    div.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
    div.innerHTML = prompt('Text?');
    document.body.appendChild(div);
    return div;
  }
}

const hello = new options('120px', '120px', 'red', '20px', 'center');

console.log(hello.textAdd());






















// let age = document.getElementById('age');
//
// function showUser(surname, name) {
// 				 this.value = age.value;
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 				 console.log(this.value);
// }
//
// console.log(age.value);
// showUser('Chernii', 'Artem');

// let age = document.getElementById('age');
//
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 				 console.log(age.value);
// }
//
// console.log(age.value);
// showUser('Chernii', 'Artem');

// let age = document.getElementById('age');
//
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// 				 console.log(age.value);
// }
//
// console.log(age.value);
// showUser.call(age, 'Artem' , ' Chernii');
// showUser.apply(age, ['Artem', 'Chernii']);

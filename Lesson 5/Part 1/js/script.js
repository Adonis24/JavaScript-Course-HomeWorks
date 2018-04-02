let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0],
    menuItemThird = document.getElementsByClassName('menu-item')[1],
    column = document.getElementsByClassName('column')[1],
    title = document.getElementById('title'),
    adver = document.getElementsByClassName('adv'),
    askField = document.getElementById('prompt');


// menu.replaceChild(menuItem[1], menuItem[2]);

// 1st
menu.insertBefore(menuItemThird, menuItem[3]);
let li = document.createElement('li');
let text = document.createTextNode('Пятый пункт');
li.classList.add('menu-item');
li.appendChild(text);
menu.appendChild(li);

// 2nd
document.body.style.background = "#f3f3f3 url('img/apple_true.jpg') center no-repeat";
document.body.style.backgroundSize = 'cover';

// 3rd

title.innerHTML = "Мы продаем только подлинную технику Apple";

//4th

for (var i=0;i<adver.length;i+=1){
  adver[i].style.display = 'none';
}

//5th

// let quest = prompt("Вам нравится техника apple?");

function askQuest() {
  setTimeout( function() {
    let quest = prompt("Вам нравится техника apple?");
    if (quest != null) {
      askField.innerHTML = quest;
      console.log(quest);
    }
  }, 1500);
}
askQuest();

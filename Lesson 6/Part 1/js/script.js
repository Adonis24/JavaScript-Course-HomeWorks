let openBlock      = document.getElementById('open'),
    openBtn        = document.getElementById('open-btn'),
    name           = document.getElementsByClassName('name'),
    nameValue      = document.getElementsByClassName('name-value')[0],
    budget         = document.getElementsByClassName('budget'),
    budgetValue    = document.getElementsByClassName('budget-value')[0],
    goods          = document.getElementsByClassName('goods'),
    goodsValue     = document.getElementsByClassName('goods-value')[0],
    items          = document.getElementsByClassName('items'),
    itemsValue     = document.getElementsByClassName('items-value')[0],
    employers      = document.getElementsByClassName('employers'),
    employersValue = document.getElementsByClassName('employers-value')[0],
    discount       = document.getElementsByClassName('discount'),
    discountValue  = document.getElementsByClassName('discount-value')[0],
    isopen         = document.getElementsByClassName('isopen'),
    isopenValue    = document.getElementsByClassName('isopen-value')[0],
    mainFunctions  = document.getElementsByClassName('main-functions'),
    goodsItem      = document.getElementsByClassName('goods-item'),
    goodsItemBtn   = document.getElementsByClassName('goods-item-btn')[0],
    budgetBtn      = document.getElementsByClassName('count-budget-btn')[0],
    empBtn         = document.getElementsByClassName('hire-employers-btn')[0],
    chooseItem     = document.querySelector('.choose-item'),
    timeValue      = document.querySelector('.time-value'),
    countBudgetVal = document.querySelector('.count-budget-value'),
    hireEmpItem    = document.querySelectorAll('.hire-employers-item'),
    img1           = document.getElementsByClassName('img1')[0],
    img2           = document.getElementsByClassName('img2')[0],
    discImg1       = document.getElementsByClassName('discImg1')[0],
    discImg2       = document.getElementsByClassName('discImg2')[0];

let money,
    price;

openBtn.addEventListener('click', () => {
  money   =    prompt("Ваш бюджет?", "100");
  while (isNaN(money) || money == '' || money == null) {
    alert('Бюджет должен быть числом');
    money   =  prompt("Ваш бюджет?", "100");
  }
  let discount = confirm('У вас есть купон на скидку?');

  if (discount === true) {
    price -= price*20/100;
    discImg1.style.display = 'block';
    console.log(price);
  } else {
    discImg2.style.display = 'block';
    console.log(price);
  }
  budgetValue.textContent = money;
  nameValue.textContent   = prompt("Название вашего магазина?", "Aldi").toUpperCase();
  openBlock.classList.remove('active');
});

goodsItemBtn.addEventListener('click', () => {
  for (var i = 0; i < goodsItem.length; i++) {

    let a = goodsItem[i].value

    if ( (typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50) {
      console.log('Everything is working!');
      mainList.shopGoods[i] = a;
      goodsValue.textContent = mainList.shopGoods;
    } else {
      alert('Введите тип товара еще раз!');
      i--;
    }
  }
});
chooseItem.addEventListener('change', () => {
  let items = chooseItem.value;

  if (isNaN(items) && items != '') {
    mainList.shopItems = items.split(', ');
    mainList.shopItems.sort();

    itemsValue.textContent = mainList.shopItems;
  }
});
timeValue.addEventListener('change', () => {
  let time = timeValue.value;

  if (time < 0) {
    console.log('Its not possible!');
    mainList.open = false;
  } else if (time > 8 && time <20) {
    console.log('Its time to work!');
    mainList.open = true;
  } else if (time > 24) {
    console.log('Its too late for this.');
    mainList.open = false;
  } else {
    console.log('We have only 24 hours in a day!');
    mainList.open = false;
  };
  if (mainList.open == true) {
    img2.style.display = 'block';
    img1.style.display = 'none';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
});
// budgetValue.addEventListener('change', () => {
//
//   let discount = confirm('У вас есть купон на скидку?');
//
//   if (discount === true) {
//     price -= price*20/100;
//     discountValue.style.backgroundColor = 'yellow';
//     console.log(price);
//   } else {
//     discountValue.style.backgroundColor = 'red';
//     console.log(price);
//   }
// });

budgetBtn.addEventListener('click', () => {
  countBudgetVal.value = money/30;
});

empBtn.addEventListener('click', () => {
  for (var i = 0; i < hireEmpItem.length; i++) {

    let name = hireEmpItem[i].value;

    if ( (typeof(name)) === 'string' && (typeof(name)) !== null && name.length < 30) {
      console.log('All Good!');
      mainList.employers[i] = [i+1] + ' ' + name;
    } else {
      alert('Имя не корректно!');
      i--;
    }
    employersValue.textContent += mainList.employers[i] + ', ';
  }
});


let mainList = {
      budget: money,
      shopName: name,
      shopGoods: [],
      employers: {
        employerName: []
      },
      open: false,
      shopItems: [],
      discount: false,
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
document.body.onload = function() {
  
  setTimeout(function(){
    var preloader = document.getElementById('page-preloader');
    if( !preloader.classList.contains('done'))
      {
        preloader.classList.add('done');
      }
  }, 1000);

}





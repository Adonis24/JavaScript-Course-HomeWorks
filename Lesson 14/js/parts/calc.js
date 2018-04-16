function calc() {
  let person = document.getElementsByClassName('counter-block-input')[0],
      restDays = document.getElementsByClassName('counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0;

  totalValue.innerHTML = 0;

  person.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum + personsSum)*4000;
    if (restDays.value === '' || person.value === '' || restDays.value === '0' || person.value === '0') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
      totalValue.classList.add('totalFade');
    }
  });
  restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum + personsSum)*4000;
    if (restDays.value === '' || person.value === '' || restDays.value === '0' || person.value === '0') {
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
      totalValue.classList.add('totalFade');
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value === '' || person.value === '' || restDays.value === '0' || person.value === '0') {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
      totalValue.classList.add('totalFade');
    }
  });
}

module.exports = calc;

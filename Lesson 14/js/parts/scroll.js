function scroll() {
  let menu = document.getElementsByTagName('nav')[0];

  menu.addEventListener('click', function(event) {
    event.preventDefault();
    animate(function(timePassed) {
      let target = event.target;
      let section = document.getElementById(target.getAttribute('href').slice(1));
      window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
    }, 1500)
  });
}

module.exports = scroll;

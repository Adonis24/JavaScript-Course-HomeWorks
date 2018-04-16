function timer() {
  let deadline = '2018-04-25';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor( (t/1000) % 60 ),
    minutes = Math.floor( (t/1000/60) % 60 ),
    hours   = Math.floor( (t/(1000*60*60)) );

    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  function setClock(id, endtime) {
    let timer = document.getElementById('timer'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

        function updateClock() {
          let t = getTimeRemaining(endtime);
          hours.innerHTML = t.hours;
          minutes.innerHTML = t.minutes;
          seconds.innerHTML = t.seconds;
          let timeInter = setInterval(updateClock, 1000);

          if (t.total <= 0 ) {
            clearInterval(timeInter);
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
          }
        };

        updateClock();
  };

  setClock('timer', deadline)

  function animate(draw, duration) {
    let start = performance.now();
    requestAnimationFrame(
      function animate(time) {
        let timePassed = time - start;
        if (timePassed > duration) {
          timePassed = duration;
        }

        draw(timePassed);

        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }
    })
  };
}

module.exports = timer;

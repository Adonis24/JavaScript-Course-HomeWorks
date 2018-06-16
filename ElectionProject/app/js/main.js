window.addEventListener('DOMContentLoaded', function () {
//VARS
  let popUpBtn = document.getElementsByClassName('popup-btn')[0],
      popup = document.getElementsByClassName('popup')[0],
      overlay = document.getElementsByClassName('overlay')[0],
      mainPage = document.getElementsByClassName('main')[0]
      customPage = document.getElementsByClassName('custom')[0],
      customInfo = document.getElementsByClassName('custom-info')[0],
      customChar = document.getElementsByClassName('custom-char')[0],
      customStyle = document.getElementsByClassName('custom-style')[0],
      readyBtn = document.getElementById('ready'),
      candidate = document.getElementsByClassName('main-cards-item')[0],
      radio = document.getElementsByClassName('radio')[0],
      preson = document.getElementById('person'),
      vote = document.getElementById('voting'),
      firstCandidate = 0,
      secondCandidate = 0,
      ourCandidate = 0
      allVotes = 100,
      sumVotes = 0,
      progressBarFirst = document.getElementsByClassName('progress-bar')[0],
      progressFirst = document.getElementsByClassName('result-count')[0],
      progressBarSecond = document.getElementsByClassName('progress-bar')[1],
      progressSecond = document.getElementsByClassName('result-count')[1],
      progressBarOurCandidate = document.getElementsByClassName('progress-bar')[2];

//Visual Effect of Active

  function addActive() {

    if (firstCandidate > secondCandidate && firstCandidate > ourCandidate) {
      document.getElementsByClassName('main-cards-item')[0].classList.add('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[1].classList.remove('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[2].classList.remove('main-cards-item-active');
      console.log('First WINNER');
    } else if (secondCandidate > firstCandidate && secondCandidate > ourCandidate) {
      document.getElementsByClassName('main-cards-item')[1].classList.add('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[0].classList.remove('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[2].classList.remove('main-cards-item-active');
      console.log('Second WINNER');
          } else if (ourCandidate > firstCandidate && ourCandidate > secondCandidate) {
      document.getElementsByClassName('main-cards-item')[2].classList.add('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[1].classList.remove('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[0].classList.remove('main-cards-item-active');
      console.log('OUR WINNER');
    }

  }

//Visual Effect of Active Ends
 
// Popup

  popUpBtn.addEventListener('click', function () {
    popup.style.display = 'none',
    overlay.style.display = 'none',
    mainPage.style.display = 'none',
    customPage.style.display = 'flex',
    customInfo.style.display = 'block',
    customChar.style.display = 'block',
    customStyle.style.display = 'block',
    personSkin.style.backgroundImage = `url(../img/skin/skin-1.png)`,
    personHair.style.backgroundImage = `url(../img/hair/construct/hair-1.png)`,
    personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-1.png)`;
    addActive();
  });
//Popup Ends

//Candidate Info
  let candidateName = document.getElementById('name'),
      candidateAge = document.getElementById('age'),
      candidateMale = document.getElementsByClassName('sexSelect'),
      candidatePosition = document.getElementById('select'),
      candidateBio = document.getElementById('bio');

  candidateMale[1].addEventListener('click', function () {
    if (candidateMale[1].checked) {
      personSkin.style.backgroundImage = `url(../img/skin/skin-girl-1.png)`,
      personHair.style.backgroundImage = `url(../img/hair/construct/hair-5.png)`,
      personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-4.png)`,
      slidesHair[4].style.display = 'block';
      slidesHair[0].style.display = 'none';
      slidesHair[1].style.display = 'none';
      slidesHair[2].style.display = 'none';
      slidesHair[3].style.display = 'none';
      slidesHair[5].style.display = 'none';
      slidesClothes[3].style.display = 'block';
      slidesClothes[0].style.display = 'none';
      slidesClothes[1].style.display = 'none';
      slidesClothes[2].style.display = 'none';
      slidesClothes[4].style.display = 'none';
      slidesClothes[5].style.display = 'none';
    } else {
      personSkin.style.backgroundImage = `url(../img/skin/skin-${slideIndex}.png)`,
      personHair.style.backgroundImage = `url(../img/hair/construct/hair-${slideIndex}.png)`,
      personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-${slideIndex}.png)`
    }
  });
  candidateMale[0].addEventListener('click', function () {
    if (candidateMale[0].checked) {
      personSkin.style.backgroundImage = `url(../img/skin/skin-1.png)`,
      personHair.style.backgroundImage = `url(../img/hair/construct/hair-1.png)`,
      personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-1.png)`
      slidesHair[0].style.display = 'block';
      slidesHair[1].style.display = 'none';
      slidesHair[2].style.display = 'none';
      slidesHair[3].style.display = 'none';
      slidesHair[4].style.display = 'none';
      slidesHair[5].style.display = 'none';
      slidesClothes[0].style.display = 'block';
      slidesClothes[1].style.display = 'none';
      slidesClothes[2].style.display = 'none';
      slidesClothes[3].style.display = 'none';
      slidesClothes[4].style.display = 'none';
      slidesClothes[5].style.display = 'none';
    } else {
      personSkin.style.backgroundImage = `url(../img/skin/skin-${slideIndex}.png)`,
      personHair.style.backgroundImage = `url(../img/hair/construct/hair-${slideIndex}.png)`,
      personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-${slideIndex}.png)`
    }
  });

  function candidateEdit(candidate) {
        candidate.classList.remove('main-cards-item-active');

  }
//Candidate Info Ends

//Sliders
  let slideIndex = 1,
      slidesSkin = document.getElementsByClassName('skin-color'),
      prevSkin = document.getElementById('prev-skin'),
      nextSkin = document.getElementById('next-skin'),
      personSkin = document.getElementById('person-skin'),
      slidesHair = document.getElementsByClassName('hair-style');
      slidesHair.slice = [].slice;
      let maleHair = slidesHair.slice(0,3);
      femaleHair = slidesHair.slice(3);
      slidesGirlHair = document.getElementsByClassName('hair-style-girl'),
      prevHair = document.getElementById('prev-hair'),
      nextHair = document.getElementById('next-hair'),
      personHair = document.getElementById('person-hair'),
      slidesClothes = document.getElementsByClassName('clothes-style');
      slidesClothes.slice = [].slice;
      let maleClothes = slidesClothes.slice(0,3),
      femaleClothes = slidesClothes.slice(3),
      prevClothes = document.getElementById('prev-clothes'),
      nextClothes = document.getElementById('next-clothes'),
      personClothes = document.getElementById('person-clothes');


  function showSlidesSkin(n) {
    if (n > slidesSkin.length) {
      slideIndex = 1;
    };
    if (n < 1) {
      slideIndex = slidesSkin.length;
    };
    for (var i = 0; i < slidesSkin.length; i++) {
      slidesSkin[i].style.display = 'none';
    };
    slidesSkin[slideIndex - 1].style.display = 'block';
    if (candidateMale[0].checked) {
      for (let i = 0; i < slidesSkin.length; i++){
            if (slidesSkin[i].classList.contains(`skin-color-${slideIndex}`)){
              personSkin.style.backgroundImage = `url(../img/skin/skin-${slideIndex}.png)`
         }
      };
    } else if (candidateMale[1].checked) {
      for (let i = 0; i < slidesSkin.length; i++){
            if (slidesSkin[i].classList.contains(`skin-color-${slideIndex}`)){
              personSkin.style.backgroundImage = `url(../img/skin/skin-girl-${slideIndex}.png)`
         }
      };
    }
  }

  function plusSlidesSkin(n) {
    showSlidesSkin(slideIndex += n)
  }
  function currentSlideSkin(n) {
    showSlidesSkin(slideIndex = n)
  }

  prevSkin.addEventListener('click', function () {
    plusSlidesSkin(-1);
  });
  nextSkin.addEventListener('click', function () {
    plusSlidesSkin(1);
  });

  function showSlidesHair(n) {
    if (n > femaleHair.length) {
      slideIndex = 1;
    };
    if (n < 1) {
      slideIndex = femaleHair.length;
    };
    if (candidateMale[0].checked) {
      for (let i = 0; i < maleHair.length; i++) {
        maleHair[i].style.display = 'none';
      };
    }
    if (candidateMale[1].checked) {
      for (let i = 0; i < femaleHair.length; i++) {
        femaleHair[i].style.display = 'none';
      };
    }
    if (candidateMale[0].checked) {
      maleHair[slideIndex - 1].style.display = 'block';
    }
    if (candidateMale[1].checked) {
      femaleHair[slideIndex - 1].style.display = 'block';
    }
    if (candidateMale[0].checked) {
      for (let i = 0; i < slidesHair.length; i++){
            if (slidesHair[i].classList.contains(`hair-style-${slideIndex}`)){
              personHair.style.backgroundImage = `url(../img/hair/construct/hair-${slideIndex}.png)`
         }
      };
    }
    if (candidateMale[1].checked) {
      for (let i = 0;  i < slidesHair.length; i++){
            if (slidesHair[i].classList.contains(`hair-style-${slideIndex+3}`)){
              personHair.style.backgroundImage = `url(../img/hair/construct/hair-${slideIndex+3}.png)`
         }
      };
    }
  }

  function plusSlidesHair(n) {
    showSlidesHair(slideIndex += n)
  }
  function currentSlideHair(n) {
    showSlidesHair(slideIndex = n)
  }

  prevHair.addEventListener('click', function () {
    plusSlidesHair(-1);
  });
  nextHair.addEventListener('click', function () {
    plusSlidesHair(1);
  });


  function showSlidesClothes(n) {
    if (n > femaleClothes.length) {
      slideIndex = 1;
    };
    if (n < 1) {
      slideIndex = femaleClothes.length;
    };
    if (candidateMale[0].checked) {
      for (let i = 0; i < maleClothes.length; i++) {
        maleClothes[i].style.display = 'none';
      };
    }
    if (candidateMale[1].checked) {
      for (let i = 0; i < femaleClothes.length; i++) {
        femaleClothes[i].style.display = 'none';
      };
    }
    if (candidateMale[0].checked) {
      maleClothes[slideIndex - 1].style.display = 'block';
    }
    if (candidateMale[1].checked) {
      femaleClothes[slideIndex - 1].style.display = 'block';
    }
    if (candidateMale[0].checked) {
      for (let i = 0; i < slidesClothes.length; i++){
            if (slidesClothes[i].classList.contains(`clothes-style-${slideIndex}`)){
              personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-${slideIndex}.png)`
         }
      };
    }
    if (candidateMale[1].checked) {
      for (let i = 0; i < slidesClothes.length; i++){
            if (slidesClothes[i].classList.contains(`clothes-style-${slideIndex+3}`)){
              personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-${slideIndex+3}.png)`,
              console.log(femaleClothes);
              console.log(slidesClothes[i]);
         }
      };
    }
  }

  function plusSlidesClothes(n) {
    showSlidesClothes(slideIndex += n)
  }
  function currentSlideClothes(n) {
    showSlidesClothes(slideIndex = n)
  }

  prevClothes.addEventListener('click', function () {
    plusSlidesClothes(-1);
  });
  nextClothes.addEventListener('click', function () {
    plusSlidesClothes(1);
  });

//Sliders End

//Ready Btn

  readyBtn.addEventListener('click', function () {

    mainPage.style.display = 'block',
    customPage.style.display = 'none',
    customInfo.style.display = 'none',
    customChar.style.display = 'none',
    customStyle.style.display = 'none';
    newCandidate = candidate.cloneNode(true);
    document.getElementsByClassName('main-cards')[0].appendChild(newCandidate);
    candidateEdit(newCandidate);
    if ( isNaN(candidateName.value) && candidateName.value != '' && candidateAge.value != '' && candidateBio.value != '' && candidateName.value.length > 5) {
      document.getElementsByClassName('name')[2].innerHTML = candidateName.value;
      document.getElementsByClassName('age')[2].innerHTML = candidateAge.value;
      let checkedValue = null;
      for(let i = 0; candidateMale[i]; i++){
        if(candidateMale[i].checked){
             checkedValue = candidateMale[i].value;
             break;
        }
      }
      document.getElementsByClassName('sex')[2].innerHTML = checkedValue;
      document.getElementsByClassName('views')[2].innerHTML = candidatePosition.options[candidatePosition.selectedIndex].value;
      document.getElementsByClassName('bio')[2].innerHTML = candidateBio.value;
      document.getElementsByClassName('progress-bar')[2].style.height = '0%';
      document.getElementsByClassName('result-count')[2].innerHTML = '0%';
      photoCandidate = person.cloneNode(true);
      photoCandidate.classList.add('photo');
      photoCandidate.classList.remove('construct');
      document.getElementsByClassName('candidate-block')[2].replaceChild(photoCandidate, document.getElementsByClassName('photo')[2]);
    } else {
      alert('Заполните правильно анкету!');
      document.getElementById('candidate').classList.remove('main-cards-item-active');
      document.getElementsByClassName('main-cards-item')[1].classList.remove('main-cards-item-active');
      popup.style.display = 'none',
      overlay.style.display = 'none',
      mainPage.style.display = 'none',
      customPage.style.display = 'flex',
      customInfo.style.display = 'block',
      customChar.style.display = 'block',
      customStyle.style.display = 'block';
      candidateName.value = '';
      candidateAge.value = '';
      candidateBio.value = '';
      document.getElementsByClassName('main-cards')[0].removeChild(document.getElementsByClassName('main-cards-item')[2]);
    }

  });

//Ready Btn Ends

//Reset Btn

  let reset = document.getElementById('reset');

  reset.addEventListener('click', function () {
    document.getElementById('candidate').classList.remove('main-cards-item-active');
    document.getElementsByClassName('main-cards-item')[1].classList.remove('main-cards-item-active');
    popup.style.display = 'none',
    overlay.style.display = 'none',
    mainPage.style.display = 'none',
    customPage.style.display = 'flex',
    customInfo.style.display = 'block',
    customChar.style.display = 'block',
    customStyle.style.display = 'block';
    candidateName.value = '';
    candidateAge.value = '';
    candidateMale[0].checked = true;
    candidateMale[1].checked = false;
    if (candidateMale[0].checked) {
      personSkin.style.backgroundImage = `url(../img/skin/skin-1.png)`,
      personHair.style.backgroundImage = `url(../img/hair/construct/hair-1.png)`,
      personClothes.style.backgroundImage = `url(../img/clothes/construct/clothes-1.png)`
    }
    candidatePosition.selectedIndex = 0;
    candidateBio.value = '';
    document.getElementsByClassName('main-cards')[0].removeChild(document.getElementsByClassName('main-cards-item')[2]);
    progressBarFirst.style.height = 35 + '%';
    progressFirst.innerHTML = 35 + '%';
    progressBarSecond.style.height = 65 + '%';
    progressSecond.innerHTML = 65 + '%';
    firstCandidate = 0;
    secondCandidate = 0;
    ourCandidate = 0;
    console.log(document.getElementById('candidate'));

  });


//Reset Btn Ends

//25% impact

  let crime = document.getElementById('crime');

  crime.addEventListener('click', function () {

    let progressBarOurCandidate = document.getElementsByClassName('progress-bar')[2],
        progressOurCandidate = document.getElementsByClassName('result-count')[2];

    let progressBar = document.getElementsByClassName('progress-bar')[2],
        height = parseInt(progressBar.style.height),
        progress = document.getElementsByClassName('result-count')[2],
        heightIncrease = parseInt(progress.textContent);
    progressBar.style.height = (height + 25) + '%';
    progress.innerHTML = (heightIncrease + 25) + '%';
    if (firstCandidate === 0 && secondCandidate === 0) {
      firstCandidate += 45;
      secondCandidate += 25;
      progressBarFirst.style.height = 45 + '%';
      progressFirst.innerHTML = 45 + '%';
      progressBarSecond.style.height = 25 + '%';
      progressSecond.innerHTML = 25 + '%';
    } else if (firstCandidate > 0 || secondCandidate > 0) {
      firstCandidate -= 12.5;
      secondCandidate -= 12.5;
      console.log(firstCandidate);
      console.log(secondCandidate);
      progressBarFirst.style.height = Math.round(firstCandidate) + '%';
      progressFirst.innerHTML = Math.round(firstCandidate) + '%';
      progressBarSecond.style.height = Math.round(secondCandidate) + '%';
      progressSecond.innerHTML = Math.round(secondCandidate) + '%';
    }
    if (parseInt(progressBarFirst.style.height) < 1 || parseInt(progressBarFirst.style.height) === 0) {
      secondCandidate -= 25;
      console.log(firstCandidate);
      console.log(secondCandidate);
      progressBarFirst.style.height = Math.round(firstCandidate) + '%';
      progressFirst.innerHTML = Math.round(firstCandidate) + '%';
      progressBarSecond.style.height = Math.round(secondCandidate) + '%';
      progressSecond.innerHTML = Math.round(secondCandidate) + '%';
    } else if (parseInt(progressBarSecond.style.height) < 1 || parseInt(progressBarSecond.style.height) === 0 ) {
      firstCandidate -= 25;
      console.log(firstCandidate);
      console.log(secondCandidate);
      progressBarFirst.style.height = Math.round(firstCandidate) + '%';
      progressFirst.innerHTML = Math.round(firstCandidate) + '%';
      progressBarSecond.style.height = Math.round(secondCandidate) + '%';
      progressSecond.innerHTML = Math.round(secondCandidate) + '%';
    } else if (secondCandidate < 15 && firstCandidate === 0) {
      firstCandidate = 0;
      secondCandidate = 0;
      ourCandidate = 100;
    } else if (firstCandidate < 15 && secondCandidate === 0) {
      firstCandidate = 0;
      secondCandidate = 0;
      ourCandidate = 100;
    }
    ourCandidate += 25;
    addActive();
    console.log(parseInt(progressBarFirst.style.height));
    console.log(parseInt(progressBarSecond.style.height));
    console.log(parseInt(progressBarOurCandidate.style.height));
    if (firstCandidate < 1) {
      progressBarFirst.style.height = 0 + '%';
      progressFirst.innerHTML = 0 + '%';
    }
    if (secondCandidate < 1) {
      progressBarSecond.style.height = 0 + '%';
      progressSecond.innerHTML = 0 + '%';
    }
    if (ourCandidate > 99) {
      progressBar.style.height = 100 + '%';
      progress.innerHTML = 100 + '%';
      progressBarFirst.style.height = 0 + '%';
      progressFirst.innerHTML = 0 + '%';
      progressBarSecond.style.height = 0 + '%';
      progressSecond.innerHTML = 0 + '%';
    }
  });

//25% impact Ends

//Random Election


  vote.addEventListener('click', function () {

    let progressBarOurCandidate = document.getElementsByClassName('progress-bar')[2],
        progressOurCandidate = document.getElementsByClassName('result-count')[2];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }
    firstCandidate = getRandomArbitrary(100,1);
    function getRandomArbitraryTwo(max, min) {
      return Math.random() * (max - min) + min;
    }
    secondCandidate = getRandomArbitraryTwo((100 - firstCandidate),1);
    ourCandidate = (100 - (firstCandidate + secondCandidate));

    sumVotes = firstCandidate + secondCandidate + ourCandidate;

    progressBarFirst.style.height = Math.round(firstCandidate) + '%';
    progressFirst.innerHTML = Math.round(firstCandidate) + '%';

    progressBarSecond.style.height = Math.round(secondCandidate) + '%';
    progressSecond.innerHTML = Math.round(secondCandidate) + '%';

    console.log(progressBarOurCandidate);
    progressBarOurCandidate.style.height = Math.round(ourCandidate) + '%';
    progressOurCandidate.innerHTML = Math.round(ourCandidate) + '%';
    console.log(firstCandidate);
    console.log(secondCandidate);
    console.log(ourCandidate);
    addActive();
  });

//Random Election Ends


});

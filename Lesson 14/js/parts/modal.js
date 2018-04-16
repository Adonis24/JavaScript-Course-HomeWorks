function modal() {
  let more    = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close   = document.querySelector('.popup-close'),
      descBtn = document.getElementsByClassName('description-btn'),
      popup   = document.querySelector('.popup');

  more.addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    popup.classList.add('fadePop');
    document.body.style.overflow = 'hidden';
  });

  descBtn[0].addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    popup.classList.add('fadePop');
    document.body.style.overflow = 'hidden';
  });
  descBtn[1].addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    popup.classList.add('fadePop');
    document.body.style.overflow = 'hidden';
  });
  descBtn[2].addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    popup.classList.add('fadePop');
    document.body.style.overflow = 'hidden';
  });
  descBtn[3].addEventListener('click', function() {
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    popup.classList.add('fadePop');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', function() {
    popup.classList.remove('fadePop');
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    statusMessage.innerHTML = '';
    statusMessage.classList.remove('status');
    document.body.style.overflow = '';
  });
  window.addEventListener('click', function(event) {
    if (event.target == overlay) {
        overlay.style.display = 'none';
        statusMessage.innerHTML = '';
        statusMessage.classList.remove('status');
        document.body.style.overflow = '';
    }
  });
  let message = new Object();
  message.loading = 'Загрузка...';
  message.succes = 'Спасибо, скоро мы с вами свяжемся';
  message.failure = 'Что-то пошло не так';

  let form = document.getElementsByClassName('main-form')[0],
  lastForm = document.getElementsByTagName('form')[0],
  lastFormInput = lastForm.getElementsByTagName('input'),
  input = form.getElementsByTagName('input'),
  statusMessage = document.createElement('div'),
  succesForm = document.createElement('div');

  form.addEventListener('submit', function() {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let formData  = new FormData(form);

    request.send(formData);
    request.onreadystatechange = function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        statusMessage.classList.add('status');
      } else if (request.readyState === 4 ) {
        if (request.status === 200 && request.status < 300) {
          statusMessage.innerHTML = message.succes;
          statusMessage.classList.add('status');
        } else {
          statusMessage.innerHTML = message.failure;
          statusMessage.classList.add('status');
        }
      }
    }
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  });
  lastForm.addEventListener('submit', function() {
    event.preventDefault();
    lastForm.appendChild(succesForm);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    let formData  = new FormData(lastForm);

    request.send(formData);
    request.onreadystatechange = function() {
      if (request.readyState < 4) {
        succesForm.innerHTML = message.loading;
        succesForm.classList.add('succesForm');
      } else if (request.readyState === 4 ) {
        if (request.status === 200 && request.status < 300) {
          succesForm.innerHTML = message.succes;
          succesForm.classList.add('succesForm');
        } else {
          succesForm.innerHTML = message.failure;
          succesForm.classList.add('succesForm');
        }
      }
    }
    for (let i = 0; i < lastFormInput.length; i++) {
      lastFormInput[i].value = '';
    }

  });
}

module.exports = modal;

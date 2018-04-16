function ajax() {
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

module.exports = ajax;

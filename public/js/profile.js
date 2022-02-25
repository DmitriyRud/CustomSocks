const profileCont = document.querySelector('#pcont');

profileCont.addEventListener('click', async (e) => {
  if (e.target.id === 'btnNameChange') {
    if (!document.querySelector('#inpName')) {
      const inputName = document.createElement('input');
      inputName.setAttribute('id', 'inpName');
      e.target.closest('div').appendChild(inputName);
    } else {
      const name = document.querySelector('#inpName').value;
      if (name.length < 2) {
        const errName = document.createElement('span');
        errName.setAttribute('id', 'errName');
        errName.innerHTML = '<br>Имя должно содержать больше 1 символа';
        e.target.closest('div').appendChild(errName);
        setTimeout(() => {
          document.querySelector('#errName').remove();
        }, 1500);
      } else {
        document.querySelector('#inpName').remove();
        const response = await fetch('/users/profile', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });
        if (response.ok) {
          window.location = '/users/profile';
        }
      }
    }
  }

  if (e.target.id === "btnEmailChenge") {
    console.log('email');
    if (!document.querySelector('#inpEmail')) {
      const inputName = document.createElement('input');
      inputName.setAttribute('id', 'inpEmail');
      e.target.closest('div').appendChild(inputName);
    } else {
      const email = document.querySelector('#inpEmail').value;
      console.log(email);
      if (!email.includes('@')) {
        const errName = document.createElement('span');
        errName.setAttribute('id', 'errEmail');
        errName.innerHTML = '<br>Почта должна содержать символ собачки "@"';
        e.target.closest('div').appendChild(errName);
        setTimeout(() => {
          document.querySelector('#errEmail').remove();
        }, 1500);
      } else {
        document.querySelector('#inpEmail').remove();
        const response = await fetch('/users/profile', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          window.location = '/users/profile';
        }
      }
    }
  }

  if (e.target.id === 'btnPhoneChange') {
    if (!document.querySelector('#inpPhone')) {
      const inputName = document.createElement('input');
      inputName.setAttribute('id', 'inpPhone');
      e.target.closest('div').appendChild(inputName);
    } else {
      const phone = document.querySelector('#inpPhone').value;
      if (phone.length < 5) {
        const errName = document.createElement('span');
        errName.setAttribute('id', 'errPhone');
        errName.innerHTML = '<br>Номер телефона может содержать минимум 5 цифр';
        e.target.closest('div').appendChild(errName);
        setTimeout(() => {
          document.querySelector('#errPhone').remove();
        }, 1500);
      } else {
        document.querySelector('#inpPhone').remove();
        const response = await fetch('/users/profile', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone }),
        });
        if (response.ok) {
          window.location = '/users/profile';
        }
      }
    }
  }
  // if (e.target.id === "btnPassView") {
  //   console.log('passView');
  // }

  if (e.target.id === "btnPassChenge") {
    console.log('Pass chenge');
    if (!document.querySelector('#inpPassword')) {
      const inputName = document.createElement('input');
      inputName.setAttribute('id', 'inpPassword');
      e.target.closest('div').appendChild(inputName);
    } else {
      const password = document.querySelector('#inpPassword').value;
      console.log(password);
      if (password.length < 3) {
        // тут должна быть проверка адреса почты через регулярку, тестово только на собачку
        const errName = document.createElement('span');
        errName.setAttribute('id', 'errPassword');
        errName.innerHTML = '<br>Пароль должен быть не короче 3';
        e.target.closest('div').appendChild(errName);
        setTimeout(() => {
          document.querySelector('#errPassword').remove();
        }, 1500);
      } else {
        document.querySelector('#inpPassword').remove();
        const response = await fetch('/users/profile', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password }),
        });
        if (response.ok) {
          window.location = '/users/profile';
        }
      }
    }
  }

})

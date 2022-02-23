const $form = document.forms.signup;

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  const res = await fetch('/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (res.status === 555) {
    alert('Заполни все данные или такой аккаунт уже есть');
  } else if (res.status === 200) {
    alert('Успешно Зарегестрирован');
    window.location = '/users/profile';
  }
});

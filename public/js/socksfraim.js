const btn = document.querySelector('#btn-share');
const divBtn = document.querySelector('div[name=btnShare]');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
  const check = document.querySelector('input[name=inpShare]');
  console.log(check);
  if (!check) {
    const input = document.createElement('input');
    input.setAttribute('name', 'inpShare');
    input.value = document.location.href;
    divBtn.appendChild(input);
  } else {
    check.remove();
  }
});

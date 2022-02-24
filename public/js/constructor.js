const inputForm = document.querySelector('#input-form');
const sockColor = document.querySelector('#color-layer');
const colorSelector = document.querySelector('#color-selector');

colorSelector.style.backgroundColor = colorSelector.value;

inputForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.name === 'colorpicker') {
    sockColor.style.backgroundColor = colorSelector.value;
    colorSelector.style.backgroundColor = colorSelector.value;
    if (colorSelector.value === '#FFFFFF' || colorSelector.value === '#FFD700') colorSelector.style.color = '#000000';
    else colorSelector.style.color = '#FFFFFF';
  }
});

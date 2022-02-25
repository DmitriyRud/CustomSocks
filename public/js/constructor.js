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

const imageDiv = document.querySelector('.images-patterns');

imageDiv.addEventListener('mouseover', (e) => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    //e.target.parentNode.style.border = '2px solid red';
    e.target.style.backgroundColor = colorSelector.value;
  }
});
imageDiv.addEventListener('mouseout', (e) => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    //e.target.parentNode.style.border = '2px solid black';
    if (e.target.parentNode.style.border !== '2px solid red') {
      e.target.style.backgroundColor = 'unset';
    }
  }
});

const imgLayer = document.querySelector('#img-layer img');
const patternLayer = document.querySelector('#pattern-layer img');

imageDiv.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    const allCards = e.target.parentNode.parentNode.children;
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].querySelector('img').style.backgroundColor = 'unset';
      allCards[i].style.border = '2px solid black';
    }
    e.target.parentNode.style.border = '2px solid red';
    e.target.style.backgroundColor = colorSelector.value;
    if (e.target.parentNode.getAttribute('class') === 'img-card') {
      imgLayer.setAttribute('src', e.target.getAttribute('src'));
    } else {
      patternLayer.setAttribute('src', e.target.getAttribute('src'));
    }
  }
});

const favoritesButton = document.querySelector('#favorites');
const cartButton = document.querySelector('#cart');

const message = document.querySelector('.messages p');


favoritesButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const resColor = colorSelector.value;
  const resImage = imgLayer.getAttribute('src');
  const resPattern = patternLayer.getAttribute('src');
  //console.log({resColor, resImage, resPattern});

  const response = await fetch('/favorites', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      color: resColor,
      image: resImage,
      pattern: resPattern,
    })
  });

  if (response.ok) {
    message.innerHTML = 'Дизайн добавлен в Избранное';
  } else {
    message.innerHTML = 'Дизайн уже есть в Вашем Избранном';
  };
    setTimeout(() => {
      message.innerHTML = '';
    }, 2000);
});

cartButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const resColor = colorSelector.value;
  const resImage = imgLayer.getAttribute('src');
  const resPattern = patternLayer.getAttribute('src');
  //console.log({resColor, resImage, resPattern});

  const response = await fetch('/cart', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      color: resColor,
      image: resImage,
      pattern: resPattern,
    })
  });

  if (response.ok) {
    message.innerHTML = 'Товар добавлен в корзину';
    setTimeout(() => {
      message.innerHTML = '';
    }, 2000);
  }
});

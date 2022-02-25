const card = document.querySelector('.cart1');

card.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.classList.contains('increment')) {
    const scoreIn = e.target.closest('.wrap').querySelector('.counter');
    // console.log(score);
    scoreIn.innerHTML = Number(scoreIn.innerHTML) + 1;
  }
  if (e.target.classList.contains('decrement')) {
    const scoreDe = e.target.closest('.wrap').querySelector('.counter');
    scoreDe.innerHTML = Number(scoreDe.innerHTML) - 1;
  }
  const res = await fetch('/product/box', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify({ scoreIn, scoreDe })
  })
});

// if (Number(score.innerHTML) <= 0) {
//   return Number(score.innerHTML) += 1;
// }


// updateDisplay(--counterVal);
// //   if (counterVal <= 0) {
// //     return counterVal += 1;
// //   }

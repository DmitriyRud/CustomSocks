const card = document.querySelector('.cart1');

card.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('increment')) {
    const score = e.target.closest('.wrap').querySelector('.counter');
    // console.log(score);
    score.innerHTML = Number(score.innerHTML) + 1;
  }
  if (e.target.classList.contains('decrement')) {
    const score = e.target.closest('.wrap').querySelector('.counter');
    score.innerHTML = Number(score.innerHTML) - 1;
  }
  // const val = await fetch()
});

// if (Number(score.innerHTML) <= 0) {
//   return Number(score.innerHTML) += 1;
// }


// updateDisplay(--counterVal);
// //   if (counterVal <= 0) {
// //     return counterVal += 1;
// //   }

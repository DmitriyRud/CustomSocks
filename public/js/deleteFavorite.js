console.log('FNJNFSK')
const del = document.querySelector('#Vraper');
del.addEventListener('click', async (e) => {
  const delId = e.target.id;
  if (e.target.classList.contains('delete')) {
    e.preventDefault();
    const delNo = await fetch(`/socks/delete/${delId}`, {
      method: 'DELETE',
    });
    if (delNo.status === 200) {
      e.target.parentNode.closest('.container').remove();
    } else {
      alert('Error');
    }
  }
});

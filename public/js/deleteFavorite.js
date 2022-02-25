const del = document.querySelector('#Vraper');
del.addEventListener('click', async (e) => {
  e.preventDefault();
  const delId = e.target.id;
  if (e.target.classList.contains('delete')) {
    const delNo = await fetch(`/socks/delete/${delId}`, {
      method: 'DELETE',
    });
    if (delNo.status === 200) {
      console.log('=================start');
      e.target.parentNode.closest('[name=frame]').remove();
      console.log('=================end');
    } else {
      alert('Error');
    }
  }
});

console.log('READY');

const inp = document.getElementById('text');
const btn = document.getElementById('btn');
const messagesDiv = document.querySelector('.messages2');

const socket = new WebSocket('ws://localhost:3100');

socket.onopen = () => {
  console.log('connected!');
};

socket.onmessage = (message) => {
  // console.log(message);
  const readyText = JSON.parse(message.data);
  messagesDiv.innerHTML += `<div class="messege">${readyText.text} </div>`;
};

btn.addEventListener('click', (e) => {
  const myMessage = inp.value;
  socket.send(JSON.stringify({ text: myMessage })); // подключить юзера
  inp.value = '';
});



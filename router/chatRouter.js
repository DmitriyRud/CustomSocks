const WebSocket = require('ws');
const express = require('express');
const { User } = require('../db/models');
const { Chat } = require('../db/models');

const router = express.Router();

// WebSocket
const wss = new WebSocket.Server({ port: 3100 });

// wss.on('connection', (client) => {
//   console.log('connection');
//   client.on('message', (data) => {
//     // console.log('received: %s', data);
//     const messageFromUser = JSON.parse(data);
//     // client.send(JSON.stringify(messageFromUser));// сообщение отправляется только автору
//     wss.clients.forEach((client) => {
//       client.send(JSON.stringify(messageFromUser));
//     });
//   });
//   // client.send('Hello!');
// });

router.get('/message', async (req, res) => {
  console.log(req.session.userId)
  const user = await User.findByPk(+req.session.userId);
  const message = await Chat.findAll();
  if (user) {
    wss.on('connection', (client) => {
      console.log('connection');
      client.on('message', async (data) => {
      // console.log('received: %s', data);
        const messageFromUser = JSON.parse(data);
        // console.log(messageFromUser)
        await Chat.create({ text: messageFromUser.text });
        // client.send(JSON.stringify(messageFromUser));// сообщение отправляется только автору
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(messageFromUser));
        });
      });
    // client.send('Hello!');
    });
    res.render('chat', { title: 'Express', message, username: user.name });
  } else {
    res.redirect('user/signup');
  }
});

module.exports = router;

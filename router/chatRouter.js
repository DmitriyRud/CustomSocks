const WebSocket = require('ws');
const express = require('express');
const { User } = require('../db/models');
const { Chat } = require('../db/models');

const router = express.Router();

// WebSocket
const wss = new WebSocket.Server({ port: 3101 });

router.get('/message', async (req, res) => {
  const user = await User.findByPk(+req.session.userId);
  const message = await Chat.findAll();
  if (user) {
    wss.on('connection', (client) => {
      console.log('connection');
      client.on('message', async (data) => {
      // console.log('received: %s', data);
        const messageFromUser = JSON.parse(data);
        await Chat.create({ text: messageFromUser.text });
        // client.send(JSON.stringify(messageFromUser));// сообщение отправляется только автору
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(messageFromUser));
        });
      });
    });
    res.render('chat', { title: 'Express', message, username: user.name });
  } else {
    res.redirect('user/signup');
  }
});

module.exports = router;

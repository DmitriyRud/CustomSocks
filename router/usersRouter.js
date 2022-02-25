const express = require('express');
const sha256 = require('sha256');
const { deepCheckUser } = require('../middleware/userCheck');

const router = express.Router();

const { User } = require('../db/models');

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const userOne = await User.findOne({ where: { email } });
    function formatPhoneNumber(tel) {
      const cleaned = (`${tel}`).replace(/\D/g, '');
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
      }
      res.send('Пожалуйста, введите номер в указанном формате. Спасибо!');
    }
    const redTel = formatPhoneNumber(phone);
    if (userOne) {
      res.sendStatus(555);
    } else {
      const password = sha256(req.body.password);
      // console.log(req.body)
      const user = await User.create({
        name,
        password,
        email,
        phone: redTel,
      });
      req.session.userId = user.id;
      req.session.userName = user.name;
      req.session.userEmail = user.email;
      req.session.userPassword = user.password;
      req.session.userPhone = user.phone;
      res.sendStatus(200);
    }
  } catch (error) {
    console.log('Error user signup');
  }
});

router.get('/signin', (req, res) => {
  res.render('signin');
});

router.post('/signin', async (req, res) => {
  const { email } = req.body;
  const password = sha256(req.body.password);
  const user = await User.findOne({ where: { email } });
  if (user) {
    if (user.password === password) {
      req.session.userId = user.id;
      req.session.userEmail = user.email;
      req.session.userName = user.name;
      res.redirect(`/users/profile/${user.id}`);
    } else {
      res.send('wrong password');
    }
  } else {
    res.redirect('/users/signup');
  }
});

router.get('/profile/:id', deepCheckUser, async (req, res) => {
  const me = await User.findByPk(req.session.userId);
  res.render('profile', { me });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('login');
  res.redirect('/');
});

router.post('/profile', async (req, res) => {
  const { name, password: pass, email, phone } = req.body;
  const id = req.session.userId;
  console.log(name, id);
  if (name) {
    const response = await User.update({ name }, { where: { id } });
    return res.json(response);
  }
  if (email) {
    const response = await User.update({ email }, { where: { id } });
    return res.json(response);
  }
  if (pass) {
    const password = sha256(pass);
    const response = await User.update({ password }, { where: { id } });
    return res.json(response);
  }
  if (phone) {
    const response = await User.update({ phone }, { where: { id } });
    return res.json(response);
  }
});

module.exports = router;

const express = require('express');

const router = express.Router();
const { Cart } = require('../db/models');

router.get('/box', async (req, res) => {
  const cart = await Cart.findAll({ where: { user_id: req.session.userId } });
  // console.log(cart)
  const sum = cart.reduce((acc, item) => {
    acc += (item.count * item.full_price);
    return acc;
  }, 0);
  // console.log(sum);
  res.render('cart', { cart, sum });
});

module.exports = router;

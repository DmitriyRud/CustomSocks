const express = require('express');

const router = express.Router();
const { Cart, Color, Pattern, Image } = require('../db/models');

router.get('/box', async (req, res) => {
  // добавить код для отправки в хбс
  const designsFavUser = await Cart.findAll({ where: { user_id: req.session.userId } });
  // console.log(designsFavUser);
  const result = designsFavUser.map(async (designObj) => {
    const { dataValues: color } = await Color.findOne({ where: { id: designObj.color_id } });
    const { dataValues: pattern } = await Pattern.findOne({ where: { id: designObj.pattern_id } });
    const { dataValues: image } = await Image.findOne({ where: { id: designObj.image_id } });
    
    return { color, pattern, image };
  })
  const cart = await Cart.findAll({ where: { user_id: req.session.userId } });
  // console.log(cart)
  const sum = cart.reduce((acc, item) => {
    acc += (item.count * item.full_price);
    return acc;
  }, 0);
  // console.log(sum);
  res.render('cart', { cart, sum, result });
});

module.exports = router;

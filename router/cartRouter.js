const express = require('express');

const router = express.Router();

const {
  Cart, Favorite, Design, Color, Pattern, Image,
} = require('../db/models');

router.get('/box', async (req, res) => {
  // добавить код для отправки в хбс
  const designsFavUser = await Favorite.findAll({ where: { user_id: req.session.userId }, raw: true });
  // console.log(designsFavUser);
  const designArr = await Promise.all(designsFavUser.map(async (favorit) => {
    const resDes = await Design.findOne({ where: { id: favorit.design_id }, raw: true });
    return resDes;
  }));
  // console.log(designArr);
  const result = await Promise.all(designArr.map(async (designObj) => {
    // console.log(designObj);
    const { dataValues: color } = await Color.findOne({ where: { id: designObj.color_id } });
    // console.log(color);
    const { dataValues: pattern } = await Pattern.findOne({ where: { id: designObj.pattern_id } });
    const { dataValues: image } = await Image.findOne({ where: { id: designObj.image_id } });
    return {
      color: color.color, pattern: pattern.url, image: image.url, design_id: designObj.id,
    };
  }));
  // console.log(result);
  const getFavorite = await Favorite.findAll({ where: { user_id: req.session.userId } });
  const cart = await Cart.findAll({ where: { user_id: req.session.userId } });
  // console.log(cart)
  const sum = cart.reduce((acc, item) => {
    acc += (item.count * item.full_price);
    return acc;
  }, 0);
  const sumItem = cart.reduce((acc, item) => {
    acc += item.count;
    return acc;
  }, 0);
  // console.log(sum);
  res.render('cart', {
    getFavorite, result, cart, sum, sumItem,
  });
});

router.put('/box', async (req, res) => {
  try {
    const { count } = req.body;
    await Cart.update({ count: count + 1 });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
});

module.exports = router;

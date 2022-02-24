const express = require('express');
const { Favorite, Design, Color, Pattern, Image } = require('../db/models');
const deletemiddleware = require('../middleware/deletemiddleware');

const router = express.Router();

router.get('/favorite', async (req, res) => {
  // добавить код для отрисовки хбс
  // const user_id = req.session.UserId;
  const designsFavUser = await Favorite.findAll({ where: { user_id: req.session.userId } });
  // console.log(designsFavUser);
  const result = designsFavUser.map(async (designObj) => {
    const { dataValues: color } = await Color.findOne({ where: { id: designObj.color_id } });
    const { dataValues: pattern } = await Pattern.findOne({ where: { id: designObj.pattern_id } });
    const { dataValues: image } = await Image.findOne({ where: { id: designObj.image_id } });
    return { color, pattern, image };
  });
  const getFavorite = await Favorite.findAll({ where: { user_id: req.session.userId } });
  res.render('favorite', { getFavorite, result });
});

router.delete('/delete/:id', deletemiddleware, async (req, res) => {
  try {
    await Favorite.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/design/:id', async (req, res) => {
  // отрисовать методом из конструктора + добавить кнопку поделиться
  const { dataValues } = await Favorite.findOne({ where: { id: req.params.id } });
  // в клиентском js заглушить кнопку и сделать всплывающий инпут с ссылкой
  console.log(dataValues);
  const { dataValues: design } = await Design.findOne({ where: { id: dataValues.design_id } });
  const { dataValues: color } = await Color.findOne({ where: { id: design.color_id } });
  const { dataValues: pattern } = await Pattern.findOne({ where: { id: design.pattern_id } });
  const { dataValues: image } = await Image.findOne({ where: { id: design.image_id } });
  // console.log(color.color);
  res.render('socksDesign', { favorite: dataValues, color: color.color, pattern: pattern.url, image: image.url });
});

module.exports = router;

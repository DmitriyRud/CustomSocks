const router = require('express').Router();
const { Favorite, Design, Color, Pattern, Image } = require('../db/models');

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

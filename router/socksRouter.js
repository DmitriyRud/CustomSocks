const router = require('express').Router();
const { Favorite } = require('../db/models');

router.get('/design/:id', async (req, res) => {
  // отрисовать методом из конструктора + добавить кнопку поделиться
  const { dataValues } = await Favorite.findOne({ where: { id: req.params.id } });
  // в клиентском js заглушить кнопку и сделать всплывающий инпут с ссылкой
  res.render('socksDesign', { design: dataValues });
});

module.exports = router;

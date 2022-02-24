const express = require('express');
const deletemiddleware = require('../middleware/deletemiddleware');

const router = express.Router();

const { Favorite } = require('../db/models');
const { Design } = require('../db/models');

router.get('/favorite', async (req, res) => {
  const getFavorite = await Favorite.findAll({ where: { user_id: req.session.userId } });
  res.render('favorite', { getFavorite });
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
  res.render('socksDesign', { design: dataValues });
});

module.exports = router;

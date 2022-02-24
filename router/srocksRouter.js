const express = require('express');

const router = express.Router();

const { Favorite } = require('../db/models');

router.get('/fovrite', async (req, res) => {
  const getFavorite = await Favorite.findAll({ where: { userId: req.session.userId } });
  res.render('fovrite', { getFavorite });
});

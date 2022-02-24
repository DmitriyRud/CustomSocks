const express = require('express');
const {Design, Color, Image, Pattern, Favorite} = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/constructor', (req, res)=>{
  res.render('constructor/main');
})
module.exports = router;

router.post('/favorites', async (req, res)=> {
  const {color, image, pattern } = req.body;
  console.log({color, image, pattern });
  const colorId = await Color.findOne({where: {color}});
  const imageUrl = await Image.findOne({where: {url: image}});
  const patternUrl = await Pattern.findOne({where:{url: pattern}});
  //console.log({colorId, imageUrl, patternUrl});
  const newDesign = await Design.create({color_id: colorId.id, image_id: imageUrl.id, pattern_id: patternUrl.id});
  const newFavorite = await Favorite.create({user_id: req.session.userId, design_id: newDesign.id});
  res.sendStatus(202);
});

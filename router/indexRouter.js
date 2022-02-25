const express = require('express');
const {
  Design,
  Color,
  Image,
  Pattern,
  Favorite,
  Cart,
} = require('../db/models');

const router = express.Router();

router.get('/', (req, res) => {
  //console.log(req)
  res.render('index');
});

router.get('/constructor', (req, res) => {
  res.render('constructor/main');
});

module.exports = router;

async function isDesignExists(color_id, image_id, pattern_id, price = 10.25) {
  const found = await Design.findOne({
    where: {
      color_id,
      image_id,
      pattern_id,
      price,
    },
  });
  return Boolean(found);
}

router.post('/favorites', async (req, res) => {
  const {
    color,
    image,
    pattern,
  } = req.body;
  // console.log({color, image, pattern });
  const colorId = await Color.findOne({
    where: {
      color,
    },
  });
  const imageUrl = await Image.findOne({
    where: {
      url: image,
    },
  });
  const patternUrl = await Pattern.findOne({
    where: {
      url: pattern,
    },
  });
  // console.log({colorId, imageUrl, patternUrl});

  if (!await isDesignExists(colorId.id, imageUrl.id, patternUrl.id)) {
    const newDesign = await Design.create({
      color_id: colorId.id,
      image_id: imageUrl.id,
      pattern_id: patternUrl.id,
      price: 10.25,
    });
    const newFavorite = await Favorite.create({
      user_id: req.session.userId,
      design_id: newDesign.id,
    });
    res.sendStatus(202);
  } else {
    res.sendStatus(418);
  }
});

router.post('/cart', async (req, res) => {
  const {
    color,
    image,
    pattern,
  } = req.body;
  // console.log({color, image, pattern });
  const colorId = await Color.findOne({
    where: {
      color,
    },
  });
  const imageUrl = await Image.findOne({
    where: {
      url: image,
    },
  });
  const patternUrl = await Pattern.findOne({
    where: {
      url: pattern,
    },
  });
  let found = await Design.findOne({
    where: {
      color_id: colorId.id,
      image_id: imageUrl.id,
      pattern_id: patternUrl.id,
    },
  });
  if (!found) {
    found = await Design.create({
      color_id: colorId.id,
      image_id: imageUrl.id,
      pattern_id: patternUrl.id,
      price: 10.25,
    });
  }
  let foundCart = await Cart.findOne({
    where: {
      user_id: res.locals.userId,
    },
  });
  if (!foundCart) {
    foundCart = await Cart.create({
      design_id: found.id,
      count: 1,
      user_id: res.locals.userId,
      full_price: 10.25,
    });
  } else {
    let foundInCart = await Cart.findOne({
      where: {
        design_id: found.id,
      },
    });
    if (!foundInCart) {
      foundInCart = await Cart.create({
        design_id: found.id,
        count: 1,
        user_id: res.locals.userId,
        full_price: 10.25,
      });
    } else {
      foundInCart.set({
        count: foundInCart.count + 1,
        full_price: foundInCart.full_price + 10.25,
      });
      await foundInCart.save();
    }

    // console.log({colorId, imageUrl, patternUrl});
    // const newDesign = await Design.create({color_id: colorId.id, image_id: imageUrl.id, pattern_id: patternUrl.id});
    // const newFavorite = await Favorite.create({user_id: req.session.userId, design_id: newDesign.id});
    res.sendStatus(202);
  }
});

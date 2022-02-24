const { Favorite } = require('../db/models');

async function deletemiddleware(req, res, next) {
  const { userId } = req.session;
  const favorite = await Favorite.findByPk(req.params.id);
  if (userId === favorite.user_id) {
    next();
  } else return res.json({ message: 'Error' });
}

module.exports = deletemiddleware;

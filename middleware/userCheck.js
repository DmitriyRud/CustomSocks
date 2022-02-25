const deepCheckUser = (req, res, next) => {
  if (Number(req.session.userId) === Number(req.params.id)) { // сравниваем id юзера и id профиля на который он хочет попасть
    next();
  } else {
    res.redirect(`/users/profile/${req.session.userId}`); // редиректим юзера всегда на свой профиль при попытке перейти на чужой
  }
};

module.exports = { deepCheckUser };

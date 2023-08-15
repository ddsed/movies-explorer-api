const { celebrate, Joi } = require('celebrate');

// User

const validationUserInfo = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().pattern(/^(.+)@(\S+)$/i),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
  }),
});

const validationUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().pattern(/^(.+)@(\S+)$/i),
  }),
});

// Movie
const validationMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

const validationMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(/https*:\/\/\S+/i),
    trailerLink: Joi.string().required().pattern(/https*:\/\/\S+/i),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(/https*:\/\/\S+/i),
    movieId: Joi.number().required(),
  }),
});

module.exports = {
  validationUserInfo,
  validationUpdateUser,
  validationMovieId,
  validationMovie,
};

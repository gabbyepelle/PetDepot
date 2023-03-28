const Pet = require("./models/pets");
const { petSchema } = require("./schemas.js");
const AppError = require("./utils/AppError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //store the url the user is requesting
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be logged in first!");
    return res.redirect("/login");
  }
  next();
};
module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const pet = await Pet.findById(id);
  if (!pet.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that.");
    return res.redirect(`/pet/${id}`);
  }
  next();
};

module.exports.validatePet = (req, res, next) => {
  const { error } = petSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new AppError(msg, 400);
  } else {
    next();
  }
};

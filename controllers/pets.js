const Pet = require("../models/pets");
const User = require("../models/user");
const { cloudinary } = require("../cloudinary");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
const categories = [
  "dogs",
  "cats",
  "horses and ponies",
  "reptiles",
  "birds",
  "amphibians",
  "livestock",
  "small furries",
  "rabbits",
];
const sexes = ["male", "female", "mixed litter"];

module.exports.index = async (req, res) => {
  const pets = await Pet.find({});
  res.render("index", { pets });
};

module.exports.renderNewForm = (req, res) => {
  res.render("new", { categories, sexes });
};

module.exports.addPet = async (req, res, next) => {
  const location = req.body.city + "," + req.body.state;
  const geoData = await geocoder
    .forwardGeocode({
      query: location,
      limit: 1,
    })
    .send();
  const pet = new Pet(req.body);
  pet.geometry = geoData.body.features[0].geometry;
  pet.author = req.user._id;
  pet.images = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  pet.date = new Date();
  await pet.save();
  const user = await User.findById(req.user._id);
  user.pets.push(pet);
  await user.save();
  req.flash("success", "Successfully added a new pet!");
  res.redirect(`/pets/${pet._id}`);
};

module.exports.showFavorites = async (req, res) => {
  const user = await User.findById(req.user._id).populate("favorites").populate('pets');

  res.render("favorites", { user });
};

module.exports.showCategories = async (req, res) => {
  const { category } = req.params;

  const pets = await Pet.find({ category });
  res.render("categories", { pets, category });
};

module.exports.showPet = async (req, res) => {
  const pet = await Pet.findById(req.params.id).populate('author');
  if (!pet) {
    req.flash("error", "Cannot find that pet!");
    return res.redirect("/pets");
  }
  res.render("show", { pet });
};

module.exports.renderEditForm = async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  if (!pet) {
    req.flash("error", "Cannot find that pet!");
    return res.redirect("/pets");
  }
  res.render("edit", { pet, categories, sexes });
};

module.exports.updatePet = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const pet = await Pet.findByIdAndUpdate(id, { ...req.body });
  const imgs = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  pet.images.push(...imgs);
  await pet.save();
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await pet.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
  req.flash("success", "Successfully updated pet information!");
  res.redirect(`/pets/${pet._id}`);
};

module.exports.favoritePet = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user._id);
  if (user.favorites.includes(id)) {
    const index = user.favorites.indexOf(id);
    user.favorites.splice(index, 1);
    await user.save();
    req.flash("success", "Successfully removed from favorites!");
  } else {
    user.favorites.push(id);
    await user.save();
    req.flash("success", "Successfully added to favorites!");
  }

  res.redirect("/pets");
};

//is this nescessary?
module.exports.deleteFavorite = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user._id);
  const index = user.favorites.indexOf(id);
  user.favorites.splice(index, 1);
  await user.save();
  req.flash("success", "Successfully removed from favorites!");

  res.redirect("/pets");
};

module.exports.deletePet = async (req, res) => {
  const { id } = req.params;
  const deletedPet = await Pet.findByIdAndDelete(id);
  req.flash("success", "Successfully removed pet!");
  res.redirect("/pets");
};

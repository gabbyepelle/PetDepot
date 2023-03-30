const express = require("express");
const router = express.Router();
const pets = require("../controllers/pets");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validatePet } = require("../middleware");

router
  .route("/")
  .get(catchAsync(pets.index))
  .post(
    isLoggedIn,
    upload.array("image"),
    validatePet,
    catchAsync(pets.addPet)
  );

router.get("/new", isLoggedIn, pets.renderNewForm);

router.get("/dashboard", isLoggedIn, catchAsync(pets.showFavorites));

router
  .route("/:id")
  .get(catchAsync(pets.showPet))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("image"),
    validatePet,
    catchAsync(pets.updatePet)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(pets.deletePet));

router.get("/category/:category", catchAsync(pets.showCategories));

router.get("/:id/edit", isLoggedIn, isAuthor, catchAsync(pets.renderEditForm));


router
  .route("/:id/favorite")
  .post(isLoggedIn, catchAsync(pets.favoritePet))
  .delete(isLoggedIn, catchAsync(pets.deleteFavorite));

module.exports = router;

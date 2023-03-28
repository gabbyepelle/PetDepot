const mongoose = require("mongoose");
const { Schema } = mongoose;

const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_200");
});

const opts = { toJSON: { virtuals: true } };

const petSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  breed: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  images: [ImageSchema],

  category: {
    type: String,
    lowercase: true,
    enum: [
      "dogs",
      "cats",
      "horses and ponies",
      "reptiles",
      "birds",
      "amphibians",
      "livestock",
      "small furries",
      "rabbits",
    ],
    required: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ["male", "female", "mixed litter"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    required: true
  }
}, opts);

petSchema.virtual("dateFormatted").get(function () {
  return this.date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
});

petSchema.virtual('properties.popUpMarkup').get(function () {
  return `
  <strong><a href="/pets/${this._id}">${this.breed}</a><strong>
  <p>${this.description.substring(0, 20)}...</p>`
});


const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;

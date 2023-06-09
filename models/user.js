const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  favorites: 
    [{type: Schema.Types.ObjectId,
    ref: "Pet"}],
    pets: 
    [{type: Schema.Types.ObjectId,
    ref: "Pet"}],
   

  
  
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);

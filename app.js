if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}



const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

const Joi = require("joi");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const petRoutes = require("./routes/pets");
const userRoutes = require("./routes/users");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const mongoose = require("mongoose");
const { findByIdAndUpdate } = require("./models/pets");
const AppError = require("./utils/AppError");
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const dbUrl = process.env.DB_URL|| "mongodb://localhost:27017/pets"
const secret = process.env.SECRET || 'thisshouldbeabettersecret'
const MongoStore = require('connect-mongo');


app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connection open");
  })
  .catch(() => {
    console.log("OH NO MONGO CONNECTION ERROR");
    console.log(err);
  });

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(mongoSanitize());
app.use(helmet())
const scriptSrcUrls = [
  "https://stackpath.bootstrapcdn.com/",
  "https://api.tiles.mapbox.com/",
  "https://api.mapbox.com/",
  "https://kit.fontawesome.com/",
  "https://cdnjs.cloudflare.com/",
  "https://cdn.jsdelivr.net/",
  "https://res.cloudinary.com/djjiwoioz/"
];
const styleSrcUrls = [
  "https://kit-free.fontawesome.com/",
  "https://stackpath.bootstrapcdn.com/",
  "https://api.mapbox.com/",
  "https://api.tiles.mapbox.com/",
  "https://fonts.googleapis.com/",
  "https://use.fontawesome.com/",
  "https://cdn.jsdelivr.net/",
  "https://res.cloudinary.com/djjiwoioz/"
];
const connectSrcUrls = [
  "https://*.tiles.mapbox.com",
  "https://api.mapbox.com",
  "https://events.mapbox.com",
  "https://res.cloudinary.com/djjiwoioz/"
];
const fontSrcUrls = [ "https://res.cloudinary.com/djjiwoioz/" ];

app.use(
  helmet.contentSecurityPolicy({
      directives : {
          defaultSrc : [],
          connectSrc : [ "'self'", ...connectSrcUrls ],
          scriptSrc  : [ "'unsafe-inline'", "'self'", ...scriptSrcUrls ],
          styleSrc   : [ "'self'", "'unsafe-inline'", ...styleSrcUrls ],
          workerSrc  : [ "'self'", "blob:" ],
          objectSrc  : [],
          imgSrc     : [
              "'self'",
              "blob:",
              "data:",
              "https://res.cloudinary.com/djjiwoioz/", //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
              "https://images.unsplash.com/"
          ],
          fontSrc    : [ "'self'", ...fontSrcUrls ],
          mediaSrc   : [ "https://res.cloudinary.com/djjiwoioz/" ],
          childSrc   : [ "blob:" ]
      }
  })
);

const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 24 * 60 * 60,
  crypto: {
      secret: secret
  }
});

store.on('error', function(e){
  console.log('SESSION STORE ERROR', e)
})




const sessionConfig = {
  store,
  name: 'session',
  secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  // console.log(req.session);
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/pets", petRoutes);
app.use("/", userRoutes);

app.all("*", (req, res, next) => {
  next(new AppError("Page Not Found", 404));
});

app.get("/", (req, res) => {
  res.render("home");
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh No, Something Went Wrong";
  res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
  console.log("app is listening");
});

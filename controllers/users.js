const User = require("../models/user");

module.exports.renderRegister = (req, res) => {
  res.render("register");
};
module.exports.register = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) return next(err);
      req.flash("success", `Welcome to Pet Depot ${user.username}`);
      res.redirect("/pets");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("register");
  }
};

module.exports.login = (req, res) => {
  req.flash("success", "Welcome Back!");
  const redirectUrl = req.session.returnTo || "/pets";
  delete req.session.returnTo;
  if (redirectUrl.includes("favorite")) {
    res.redirect("/pets");
  } else res.redirect(redirectUrl);
};

module.exports.renderLogin = (req, res) => {
  res.render("login");
};

module.exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Goodbye!");
    res.redirect("/pets");
  });
};

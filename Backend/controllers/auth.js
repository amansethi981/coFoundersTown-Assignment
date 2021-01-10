const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { name, email, age, userame, password } = req.body;
  console.log(req.body);
  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      let newuser = new User({ name, email, age, userame, password });

      await newuser.save();
      return res.status(200).json({
        msg: "User created succesfully",
        data: newuser,
      });
    }
    return res.status(422).json({
      errors: ["this  email is already registered"],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errors: "some error occured",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log(user);
    if (!user) return res.status(422).json({ errors: ["no such user exists"] });

    if (await user.comparePassword(password)) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET, {
        expiresIn: "24h",
      });

      return res.status(200).json({
        msg: "user logged in",
        token,
        data: user,
      });
    }

    return res.status(403).json({ errors: ["invalid password"] });
  } catch (err) {
    console.error(err);
    res.staus(500).json({ errors: ["some error occured"] });
  }
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};

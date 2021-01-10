const User = require("../models/user");
exports.getUserById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    res.status(200).json({
      error: "user found",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      msg: "no user found",
    });
  }
};

exports.getuser = (req, res) => {
  return res.json(req.body);
};

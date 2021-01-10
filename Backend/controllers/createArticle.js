const NewArticle = require("../models/createArticle");

exports.createArticle = async (req, res) => {
  const { description } = req.body;
 // console.log(req.body);
  try {
    let newarticle = new NewArticle({ description });
    let article = await newarticle.save();
    // console.log(article);
    return res.status(200).json({
      msg: "Created Article",
      data: newarticle,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      errors: "Some eroror occured",
    });
  }
};

exports.getAllArticle = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  NewArticle.find()
    .select("-username")
    .populate("user")
    .sort([[sortBy, "desc"]])
    .limit(limit)
    .exec((err, article) => {
      if (err) {
        return res.status(400).json({
          errors: "No article found",
        });
      }
      res.json(article);
    });
};

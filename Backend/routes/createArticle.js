const express = require("express");
const router = express.Router();

const {
  createArticle,
  getAllArticle,
} = require("../controllers/createArticle");

router.post("/publish", createArticle);
router.get("/home", getAllArticle);
module.exports = router;

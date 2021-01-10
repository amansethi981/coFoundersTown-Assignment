const express = require("express");
const router = express.Router();
const { getUserById, getuser } = require("../controllers/user");

router.param("userId", getUserById);

router.get("/user/:userId", getuser);

module.exports = router;

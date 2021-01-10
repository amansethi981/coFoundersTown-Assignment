const express = require("express");
const router = express.Router();
const { signup, login ,signout} = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name", "name should be atleast 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
  ],
  signup
);
router.post("/signin", [check("email", "email is required").isEmail()], login);

router.get("/signout",signout);

module.exports = router;

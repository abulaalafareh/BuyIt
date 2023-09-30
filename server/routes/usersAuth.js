const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "abc1234$$";

router.post("/register", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ error: "This email already exists" });
    }

    // encrypt the password with hashing it and adding salt for increased security
    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      email: req.body.email,
      password: securePassword,
      street: req.body.street,
      city: req.body.city,
      postal_code: req.body.postal_code,
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const Authentication = jwt.sign(data, JWT_SECRET);
    res.json({ Authentication });
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
});

module.exports = router;

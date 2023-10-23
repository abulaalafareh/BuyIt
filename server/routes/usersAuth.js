const express = require("express");
const router = express.Router();
const User = require("../models/Users");
// const fetchUser = require("../middleware/fetchUser");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

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
      name: req.body.name,
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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "This email does not exist." });
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(400).json({ error: "Incorrect credentials." });
    }

    const data = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        street: user.street,
        city: user.city,
        postal_code: user.postal_code,
      },
    };
    const authentication = jwt.sign(data, JWT_SECRET);

    res.json({ data, authentication, msg: "login successfull" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error." });
  }
});

module.exports = router;

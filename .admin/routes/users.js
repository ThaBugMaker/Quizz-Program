const express = require("express");
const router = express.Router();

// LOGIN PAGE
router.get("/login", (req, res) => res.render("Login"));
module.exports = router;

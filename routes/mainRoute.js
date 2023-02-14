const express = require("express");
const router = express.Router();

// render login page
router.get("/", (req, res) => res.render("./users/login"));

// render home page (faculty)
router.get("/faculty", (req, res) => res.render("faculty"));

module.exports = router;

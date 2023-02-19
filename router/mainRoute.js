const express = require("express");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.get("/login", (req, res) => res.render("./user/login"));
router.get("/faculty", isAuth, (req, res) => res.render("faculty"));

module.exports = router;

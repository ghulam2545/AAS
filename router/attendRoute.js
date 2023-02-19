const express = require("express");
const router = express.Router();

router.get("/btech-1-year", (req, res) => res.render("attendance"));

module.exports = router;

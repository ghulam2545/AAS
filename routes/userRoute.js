const express = require("express");
const router = express.Router();

// render student signup page
router.get("/add_student", (req, res) => res.render("./users/add_student", { heading: "Add New Student" }));

// render faculty signup page
router.get("/add_faculty", (req, res) => res.render("./users/add_faculty", { heading: "Add New Faculty" }));

module.exports = router;

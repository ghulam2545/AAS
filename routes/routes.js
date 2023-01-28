const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("landing");
});

router.get("/admin", (req, res) => {
    res.render("admin");
});

router.get("/faculty", (req, res) => {
    res.render("faculty");
});

router.get("/student", (req, res) => {
    res.render("student");
});

// router.get("/btech_1_year", (req, res) => {
//     res.render("attendance");
// });

// // time tables
// router.get("/time_table_btech_1_year", (req, res) => {
//     res.render("time_table/btech_1_year");
// });

// router.all("/test", (req, res) => {
//     res.render("./partials/_attend_details");
// });

router.post("/mark_attendance", (req, res) => {
    console.log(req.body);
    res.send("lol");
});

module.exports = router;

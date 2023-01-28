const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const facultyController = require("../controllers/facultyController");
const loginController = require("../controllers/loginController");

// Render add new student page.
router.get("/add_student", (req, res) => {
    res.render("./user/add_student");
});

// Render add new faculty page.
router.get("/add_faculty", (req, res) => {
    res.render("./user/add_faculty");
});

// Render login page.
router.get("/login", (req, res) => {
    res.render("./user/login");
});

// Get data from login form
router.post("/login", loginController);

// Get data from add student form
router.post("/add_student", studentController.create);

// Get data from add faculty form
router.post("/add_faculty", facultyController.create);

// lookup at all 4th year student
router.get("/btech_1_year", async (req, res, next) => {
    const studentList = await studentController.readAll(req, res, next);

    console.log(studentList);
    // insert_students(studentList);
    res.render("attendance", studentList);
});
module.exports = router;

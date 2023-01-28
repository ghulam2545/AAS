const express = require("express");
const route = express.Router();
const path = require("path");

route.get("/time_table_btech_1_year", (req, res) => {
    const loc = path.join(__dirname, "../public/time_table/btech_1_year.html");
    res.sendFile(loc);
});

module.exports = route;

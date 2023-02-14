const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultySchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    contactno: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
});

const Faculty = mongoose.model("Faculty", facultySchema);
module.exports = Faculty;

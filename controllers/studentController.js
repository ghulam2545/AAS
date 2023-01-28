const Student = require("../modals/student");

let studentList;

const studentController = {
    async create(req, res, next) {
        const {
            name,
            username,
            email,
            course,
            year,
            rollno,
            enrollno,
            contactno,
            password,
        } = req.body;

        try {
            const student = new Student({
                name,
                username,
                email,
                course,
                year,
                rollno,
                enrollno,
                contactno,
                password,
            });

            const result = await student.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }

        // res.redirect("/admin");
        next();
    },

    async readAll(req, res, next) {
        try {
            const result = await Student.find({ year: 4 }, {});
            studentList = result;
            // res.send(result);
            next();
        } catch (err) {
            res.send(err);
        }
        return studentList;
    },
};

module.exports = studentController;

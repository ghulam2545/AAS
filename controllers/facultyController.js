const Faculty = require("../modals/faculty");

const facultyController = {
    async create(req, res, next) {
        const { name, username, email, contactno, password, confirm_password } =
            req.body;

        try {
            const faculty = new Faculty({
                name,
                username,
                email,
                contactno,
                password,
            });

            const result = await faculty.save();
            res.send(result);
        } catch (err) {
            res.send(err);
        }

        // res.redirect("/admin");
        next();
    },
};

module.exports = facultyController;

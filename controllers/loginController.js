loginController = (req, res, next) => {
    const { username, password } = req.body;
    console.log(username, password);

    res.redirect("/admin");
};

module.exports = loginController;

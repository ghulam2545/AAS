const express = require("express");

const app = express();
app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const loginUsers = [];
const signupUser = [];

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/login", (req, res) => {
    try {
        const { username, password } = req.body;
        const user = {
            username,
            password,
        };

        loginUsers.push(user);

        res.redirect("/");
    } catch (err) {
        res.redirect("/login");
    }

    console.log(loginUsers);
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
});

app.post("/register", (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        const user = {
            name,
            username,
            email,
            password,
        };

        signupUser.push(user);

        res.redirect("/login");
    } catch (err) {
        res.redirect("/register");
    }

    console.log(signupUser);
});

app.listen(3000, () => console.log("listening on port 3000."));

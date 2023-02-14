const express = require("express");
const { APP_PORT } = require("./config/config");

const app = express();

app.get("/", (req, res) => {
    res.status(200);
    res.send("I am from home page, lol");
});

app.listen(APP_PORT, () => {
    console.log(`listening on http://localhost:${APP_PORT}`);
});

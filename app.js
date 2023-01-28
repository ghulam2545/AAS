const express = require("express");
const router = require("./routes/routes");
const userRoute = require("./routes/userRoute");
const timeTableRoute = require("./routes/timeTableRoute");
const { APP_PORT } = require("./config/config");
const connect_db = require("./database/connect_db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/js"));
app.use(express.static(__dirname + "/public/time_table"));

app.set("view engine", "ejs");

app.use(router);
app.use(userRoute);
app.use(timeTableRoute);

// connect to mongoDB
connect_db();

app.listen(APP_PORT, () => {
    console.log(`listening on port ${APP_PORT}.`);
});

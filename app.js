const express = require("express");
const mainRoute = require("./routes/mainRoute");
const userRoute = require("./routes/userRoute");
const attendRoute = require("./routes/attendRoute");
const connect_db = require('./database/connect_db');
const { APP_PORT } = require("./config/config");

const app = express();
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public/images"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/js"));
// app.use(express.static(__dirname + "/public/time_table"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MongoDB database connection
// connect_db()

app.use(mainRoute);
app.use(userRoute);
// app.use(attendRoute);

app.listen(APP_PORT, () => {
    console.log(`listening on http://localhost:${APP_PORT}`);
});

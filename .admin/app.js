const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const passport = require("passport");



const app = express();

// EJS

app.use(express.static("public"));
app.set("view engine", "ejs");



//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server up & Running... on ${PORT}`));

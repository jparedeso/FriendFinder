const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8081;
const index = require("./routes/index");

app.engine('.hbs', expressHbs({
    defaultLayout: "layout",
    extname: ".hbs"
}));
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", index);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

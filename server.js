const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const path = require("path");

// const index = require("./routes/web/index");
// const user = require("./routes/web/user");
// const books = require("./routes/web/books");
// const groups = require("./routes/web/groups");

const app = express();
const PORT = process.env.PORT || 8080;

// const db = require("./models");

app.engine('.hbs', expressHbs({
    defaultLayout: "layout",
    extname: ".hbs"
}));
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// const booksApi = require("./routes/api/book-api-routes");

// app.use('/api/books', booksApi);
// app.use('/api/exchanges', exchangesApi);
// app.use('/books', books);
// app.use('/groups', groups);
// app.use('/user', user);
// app.use('/', index);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

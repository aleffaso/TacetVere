const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');

const connection = require("./db/db")
const categoriesController = require("./controllers/categories");
const articlesController = require("./controllers/articles");
const usersController = require("./controllers/users");
const newsletter = require("./controllers/newsletter");
const routes = require('./config/routes');
const dotenv = require('dotenv');

//Set envkeys
dotenv.config({path: './.env'})

//View engine
app.set('view engine', 'ejs');

//Sessions
app.use(session({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: false
}))

//Static
app.use(express.static('public'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database connection
connection.authenticate().then(() => {
    console.log("connection success");
}).catch((error) => {
    console.log(error);
});

//routes
app.use("/", articlesController);
app.use("/", categoriesController);
app.use("/", usersController);
app.use("/", newsletter);
app.use("/", routes);

//Server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
})
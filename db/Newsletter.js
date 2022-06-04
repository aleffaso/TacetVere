const Sequelize = require("sequelize");
const connection = require("./db");

const Newsletter = connection.define('newsletter', {
    email:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Newsletter.sync({force:false}).then(() => {}); //Create table in case of it does not exist

module.exports = Newsletter;
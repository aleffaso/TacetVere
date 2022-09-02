const Sequelize = require("sequelize");
const connection = require("./db");
const Category = require("./Category")
const User = require("./User")

const Article = connection.define('articles', {
    title:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: 
    {
        type: Sequelize.TEXT,
        allowNull: false
    },
    author:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.hasMany(Article); // relation 1=>N with table
User.hasMany(Article);
Article.belongsTo(Category); //relation 1=>1 with table

Article.sync({force:false}).then(() => {}); //Create table in case of it dos not exist

module.exports = Article;
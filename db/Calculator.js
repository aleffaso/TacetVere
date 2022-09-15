const Sequelize = require("sequelize");
const connection = require("./db");

const Calculator = connection.define('calculator', {
    //Company info
    social_name:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    company_name: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    cnpj: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    people_organization_amount: 
    {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    people_out_of_organization_amount: 
    {
        type: Sequelize.DECIMAL,
        allowNull: true
    },
    company_sector: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    company_task_nature:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    year:
    {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    electricity_consume: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    electricity_transmission: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    electricity_quantity: 
    {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    electricity_unity: 
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    e1_1: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_2: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_3: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_4: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_5: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_6: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_7: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e1_8: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e2_1: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e2_2: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e2_3: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e2_4: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e2_5: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e3_1: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e3_2: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e3_3: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e3_4: 
    {
        type: Sequelize.JSON,
        allowNull: true
    },
    e3_5: 
    {
        type: Sequelize.JSON,
        allowNull: true
    }
});			

Calculator.sync({force:false}).then(() => {}); //Create table in case of it dos not exist

module.exports = Calculator;
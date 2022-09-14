const Sequelize = require("sequelize");
const connection = require("./db");

const Parameters = connection.define('parameters', {
    category:
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug_category: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    fuel: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug_fuel: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    unity_system: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    co2_fossil: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    ch4: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    N20: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    biogenic_co2: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    }, //CH4 (kg/unidade)
    ch4_energy: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    ch4_manufactured_built: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    ch4_comercial_institutional: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    ch4_rafp: //Residencial, Agricultura, Florestal ou Pesca
    {
        type: Sequelize.FLOAT,
        allowNull: false
    }, //N2O (kg/unidade)
    n2o_energy: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    n2o_manufactured_built: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    n2o_comercial_institutional: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    n2o_rafp: //Residencial, Agricultura, Florestal ou Pesca
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    hfc_32: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    hfc_125: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    cfc_12: 
    {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    reference:
    {
        type: Sequelize.STRING,
        allowNull: true
    },
    slug_reference:
    {
        type: Sequelize.STRING,
        allowNull: true
    }
});			

Parameters.sync({force:false}).then(() => {}); //Create table in case of it dos not exist

module.exports = Parameters;
const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'companyBase',
    {
        companyId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        companyName: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)
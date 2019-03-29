const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'bitacora',
    {
        registryId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        companyName: {
            type: Sequelize.STRING
        },
        place: {
            type: Sequelize.STRING
        },
        municipio: {
            type: Sequelize.STRING
        },
        begins: {
            type: Sequelize.DATE
        },
        ends: {
            type: Sequelize.DATE
        },
        date: {
            type: Sequelize.DATE
        },
        unitOp: {
            type: Sequelize.STRING
        },
        recolector: {
            type: Sequelize.STRING
        },
        plates: {
            type: Sequelize.STRING
        },
        observations: {
            type: Sequelize.TEXT
        },
        PET: {
            type: Sequelize.DOUBLE
        },
        HDPE: {
            type: Sequelize.DOUBLE
        },
        blanc: {
            type: Sequelize.DOUBLE
        },
        mix: {
            type: Sequelize.DOUBLE
        },
        newspaper: {
            type: Sequelize.DOUBLE
        },
        paperboard: {
            type: Sequelize.DOUBLE
        },
        aluminium: {
            type: Sequelize.DOUBLE
        },
        metal: {
            type: Sequelize.DOUBLE
        },
        multilayer: {
            type: Sequelize.DOUBLE
        },
        electronics: {
            type: Sequelize.DOUBLE
        },
        others: {
            type: Sequelize.DOUBLE
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)
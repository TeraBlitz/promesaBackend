const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'userBase',
    {
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fName: {
            type: Sequelize.STRING
        },
        lName: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        // email: {
        //     type: Sequelize.STRING
        // },
        password: {
            type: Sequelize.STRING
        },
        authLevel: {
            type: Sequelize.INTEGER
        },
        companyName: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
) 

// userId int not null auto_increment primary key,
// fName varchar(255) not null,
// lName varchar(255) not null,
// username varchar(255) not null,
// password varchar(255) not null,
// authLevel int not null,
// companyName varchar(255) not null,
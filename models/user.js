const Sequelize = require("sequelize")

module.exports = function(sequelize) {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        birthday: {
            type: Sequelize.DATE,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
}
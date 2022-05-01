const Sequelize = require("sequelize")

module.exports = function (sequelize) {
    return sequelize.define("role", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })
}
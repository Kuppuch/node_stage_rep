const { Sequelize } = require("sequelize");
// не сметь писать параметры бездумно. Первый параметр это название вашей БД, которую вы уже должны создать в бд. В том же воркбенче, например.
// второй и третий параметр, это пользователь и пароль для подключения. В mysql обычно root root и не парятся, хотя это и несовсем верно. 
const sequelize = new Sequelize("db_name", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const db = {}
db.sequelize = sequelize;
const userDefiner = require("../models/user")
db.user = userDefiner(sequelize)
// db.user = require("../models/user")
const roleDefiner = require("../models/role")
db.role = roleDefiner(sequelize)

db.role.hasMany(db.user);


db.ROLES = ["user", "admin"]

module.exports = db;
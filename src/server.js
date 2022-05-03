const db = require('../config/db.config');
const express = require('express');
const hbs = require('hbs')

// Подключаем созданные роутеры
const userRouter = require('../routes/userRouter')
const homeRouter = require('../routes/homeRouter')

const PORT = process.env.PORT || 8080

db.sequelize
    .sync()
    .catch(err => {
        console.log(err);
    })

const app = express();

app.set("view engine", "hbs");
app.set("views", "./views");

// Это добавили
hbs.registerPartials('./views/partials')

//так добавляются стили. Путь пишется относительный относительно корня проекта
app.use(express.static('./views/styles'));

app.use(express.urlencoded({ extended: false }));

app.use("/user", userRouter)
app.use("/", homeRouter)


//А это 404 ошибка
app.use(function (req, res, next) {
    res.status(404).send("Not Found")
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
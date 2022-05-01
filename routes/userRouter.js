const express = require("express");
// Подключаем контроллер для пользователей
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/postuser", userController.postUser); // Тут добавилась строка
userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;
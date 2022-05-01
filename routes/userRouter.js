const express = require("express");
// Подключаем контроллер для пользователей
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/create", userController.addUser);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;
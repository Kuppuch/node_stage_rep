const express = require("express");
// Подключаем контроллер для базовых запросов
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();

homeRouter.get("/about", homeController.about);
homeRouter.post("/postreq", homeController.request);
homeRouter.get("/", homeController.index);
homeRouter.get("/requests", homeController.getAllRequest);

module.exports = homeRouter;
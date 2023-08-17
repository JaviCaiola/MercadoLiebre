const express = require('express');
const mainControllers = require('../controllers/mainController');
const mainRouter = express.Router();

mainRouter.get('/', mainControllers.showIndex);
mainRouter.get('/registro', mainControllers.showRegister);

module.exports = mainRouter;
const express = require('express');
const router = express.Router();
const passport = require('passport');
const Controller = require('./app.controller');


/* GET home page. */
router.route('/').get(Controller.get);
router.use('/user', require('./user/user.router'));
router.use('/function', require('./centralService/centralService.router'));

module.exports = router;

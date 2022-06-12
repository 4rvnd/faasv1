const router = require('express').Router();
const passport = require('passport');

const Controller = require('./centralService.controller');
const UserGuard = passport.authenticate('user', {session: false});

router.post('/executeFunction', Controller.executeFunction);
router.post('/executeFunctionx1000', Controller.executeFunction);

module.exports = router;

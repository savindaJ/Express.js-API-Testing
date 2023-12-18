const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/users',controller.getUsers);
router.get('/createuser',controller.addUser);
router.get('/updateuser',controller.updateUser);
router.get('/deleteuser',controller.deleteUser);

module.exports = router;
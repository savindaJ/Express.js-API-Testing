const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/users',controller.getUsers);
router.post('/createuser',controller.addUser);
router.put('/updateuser',controller.updateUser);
router.delete('/deleteuser',controller.deleteUser);

module.exports = router;
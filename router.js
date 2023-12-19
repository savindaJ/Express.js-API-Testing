const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/customers',controller.getUsers);
router.post('/createcustomer',controller.addUser);
router.put('/updatecustomer',controller.updateUser);
router.delete('/deletecustomer',controller.deleteUser);

module.exports = router;
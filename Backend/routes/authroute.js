const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authcontroller');
router.post('/registration', authcontroller.registration);
router.post('/existingUser', authcontroller.existingUser);
router.get('/userlist', authcontroller.userlist);
router.put('/update/(:id)', authcontroller.update);
router.post('/uploaduser', authcontroller.uploadImg, authcontroller.uploaduser);
module.exports = router;    
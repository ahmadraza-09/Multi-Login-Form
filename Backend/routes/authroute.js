const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/authcontroller');
router.post('/registration', authcontroller.registration);
router.get('/userlist', authcontroller.userlist);
router.put('/update/(:id)', authcontroller.update);
module.exports = router;    
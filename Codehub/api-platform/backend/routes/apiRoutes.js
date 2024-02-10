const express = require('express');
const router = express.Routes();
const apiController = require('. ./controllers/apiController');

router.post('/create', apiController.createApi);
router.get('/list', apiController.getApiList);

module.exports = router;

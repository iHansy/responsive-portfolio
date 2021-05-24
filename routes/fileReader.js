const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    console.log('testing fileReader');
    res.send('API is working properly');
});

module.exports = router;
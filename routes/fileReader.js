const express = require('express');
const router = express.Router();
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join('public/images/projects');

router.get('/', function (req, res, next) {
    const fileList = [];

    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            fileList.push(file);
        });
        console.log('API IMAGELIST', fileList)
    });
    res.send(fileList);
});

module.exports = router;
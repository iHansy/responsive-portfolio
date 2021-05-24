const express = require('express');
const router = express.Router();
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join('public/images/projects');

router.get('/', function (req, res, next) {
    console.log('TESTING FILEREADER');

    //passsing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        const fileList = [];
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        for (file of files) {
            fileList.push(file);
        }
    });
    res.send(imageList);
});

module.exports = router;
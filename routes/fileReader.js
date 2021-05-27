const express = require('express');
const router = express.Router();
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join('public/images/projects');

router.get('/', function (req, res, next) {
    let fileList = [];
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
        let fileStat = fs.statSync(directoryPath + '/' + file).isDirectory();
        if(!fileStat) {
            fileList.push(file);
        }
    };
    res.send(fileList);
});

module.exports = router;
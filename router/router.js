const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');

// const request = require('request');

// const multer = require('multer');
// var upload = multer();
// var queue = require('express-queue');


const config = require('../config');


// router.use(express.static('static'));


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../html/index.html'))
})


const convertCsv = require('../src/convertCsv.js');
router.use('/convertCsv',convertCsv);

module.exports = router;
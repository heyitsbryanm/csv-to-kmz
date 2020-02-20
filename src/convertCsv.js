// packages
const express = require('express');
const request = require('request');
const multer = require('multer');
var upload = multer({ dest: 'temp/uploads/' })
const parse = require('csv-parse');

// const btoa = require('btoa')
const fs = require('fs')

// config
const config = require('../config');

// routes
const convertCsv = express.Router();

convertCsv.post('/', upload.single('file'), (req, res, next) => {
  console.log('req is: ', req.file)
  let formData = req.body;
  let fileData = req.file;
  // formData = Object.entries(formData);
  // let count = 0;
  // let finalCount = formData.length;

  let dataArr = fs.readFileSync(req.file.path, 'utf8');
  // let dataArr = fs.readFileSync(req.file.path, 'utf8').split('\r\n');
  let csvResults = [];

  // parses the CSV
  parse(dataArr, {}, (err, output) => {

    // removes the first row (header) if true
    if (true) {
      output.shift()
    };
    let count = 0;

    let finalOutput = config.kml.doc01;

    for (let i of output) {
      console.log(i)

      // reverse coordinates
      reverseCoords = (location) => {

        if(true) {
          let loc = location.split(',');
          let newLoc = `${loc[1]},${loc[0]},${loc[2]}`;
          return newLoc
        }
      }

      let obj = {
        title: i[0],
        category: i[1],
        image: i[2],
        // location: i[3],
        location: reverseCoords(i[3]),
        description: i[4],
      };



      console.log('obj.location is: ', obj.location)
      let placemark = `<Placemark>
      <name>${obj.title}</name>
      <description><![CDATA[<img src="${obj.image}" height="200" width="auto" /><br><br>${obj.description}]]></description>
      <styleUrl>#icon-ci-${obj.category}</styleUrl>
      <ExtendedData>
        <Data name="gx_media_links">
          <value><![CDATA[${obj.image}]]></value>
        </Data>
      </ExtendedData>
      <Point>
        <coordinates>
          ${obj.location}
        </coordinates>
      </Point>
    </Placemark>`;

      // combine data
      finalOutput += placemark;
      count += 1;
      console.log(output.length)
      console.log(count)
      if (count === output.length) {
        finalOutput += config.kml.doc03;

        fs.writeFile(`./output/places.kml`, finalOutput, err => {
          if (err) throw err;
          console.log(`
    ======================================================
    Done writing GeoJSON!
    That's it, program is done. Cheers!
    ======================================================`);

        });
      }

    }


    // when we're ready


  })


  res.sendStatus(200)
})
module.exports = convertCsv;
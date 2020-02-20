debug = {
  port: 3000
}

kml = {
  doc01: `<?xml version="1.0" encoding="UTF-8"?>
  <kml xmlns="http://www.opengis.net/kml/2.2">
    <Document>
      <Style id="icon-ci-partying-normal">
        <IconStyle>
          <scale>1</scale>
          <Icon>
            <href>images/partying.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-partying-highlight">
        <IconStyle>
          <scale>1</scale>
          <Icon>
            <href>images/partying.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-partying">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-partying-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-partying-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-exploration-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/exploration.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-exploration-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/exploration.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-exploration">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-exploration-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-exploration-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-food-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/food.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-food-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/food.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-food">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-food-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-food-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-hangout-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/hangout.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-hangout-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/hangout.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-hangout">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-hangout-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-hangout-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-to_do_before_you_die-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/to_do_before_you_die.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-to_do_before_you_die-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/to_do_before_you_die.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-to_do_before_you_die">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-to_do_before_you_die-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-to_do_before_you_die-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-mystery-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/mystery.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-mystery-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/mystery.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-mystery">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-mystery-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-mystery-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-outdoorsy_things-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/outdoorsy_things.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-outdoorsy_things-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/outdoorsy_things.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-outdoorsy_things">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-outdoorsy_things-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-outdoorsy_things-highlight</styleUrl>
        </Pair>
      </StyleMap>
           <Style id="icon-ci-photo_op-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/photo_op.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-photo_op-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/photo_op.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-photo_op">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-photo_op-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-photo_op-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-relax-normal">
      <IconStyle>
        <scale>1.1</scale>
        <Icon>
          <href>images/relax.png</href>
        </Icon>
      </IconStyle>
      <LabelStyle>
        <scale>0</scale>
      </LabelStyle>
    </Style>
    <Style id="icon-ci-relax-highlight">
      <IconStyle>
        <scale>1.1</scale>
        <Icon>
          <href>images/relax.png</href>
        </Icon>
      </IconStyle>
      <LabelStyle>
        <scale>1.1</scale>
      </LabelStyle>
    </Style>
    <StyleMap id="icon-ci-relax">
      <Pair>
        <key>normal</key>
        <styleUrl>#icon-ci-relax-normal</styleUrl>
      </Pair>
      <Pair>
        <key>highlight</key>
        <styleUrl>#icon-ci-relax-highlight</styleUrl>
      </Pair>
    </StyleMap>`,
  doc03: `</Document>
  </kml>`
}

module.exports.debug = debug;
module.exports.kml = kml
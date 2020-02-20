debug = {
  port: 3000
}

kml = {
  doc01: `<?xml version="1.0" encoding="UTF-8"?>
  <kml xmlns="http://www.opengis.net/kml/2.2">
    <Document>
      <Style id="icon-partying-normal">
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
      <Style id="icon-partying-highlight">
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
      <StyleMap id="icon-partying">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-partying-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-partying-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-explore-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/explore.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-explore-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/explore.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-explore">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-explore-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-explore-highlight</styleUrl>
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
      <Style id="icon-ci-fun_activities-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/fun_activities.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-fun_activities-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/fun_activities.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-fun_activities">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-fun_activities-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-fun_activities-highlight</styleUrl>
        </Pair>
      </StyleMap>
      <Style id="icon-ci-must_do-normal">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/must_do.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>0</scale>
        </LabelStyle>
      </Style>
      <Style id="icon-ci-must_do-highlight">
        <IconStyle>
          <scale>1.1</scale>
          <Icon>
            <href>images/must_do.png</href>
          </Icon>
        </IconStyle>
        <LabelStyle>
          <scale>1.1</scale>
        </LabelStyle>
      </Style>
      <StyleMap id="icon-ci-must_do">
        <Pair>
          <key>normal</key>
          <styleUrl>#icon-ci-must_do-normal</styleUrl>
        </Pair>
        <Pair>
          <key>highlight</key>
          <styleUrl>#icon-ci-must_do-highlight</styleUrl>
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
      </StyleMap>`,
  doc03: `</Document>
  </kml>`
}

module.exports.debug = debug;
module.exports.kml = kml
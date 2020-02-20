# CSV to KML

This is a pretty messy tool to convert CSV's to KMZ files.

# How to use

This project is pretty messy. So far I'm using this per trip. To use it as is:

1. Rename `config-sample.js` to `config.js`
2. Run `npm i` to install all packages
3. Upload images in `/ouput/images` folder
- Define the styles in `config.js`
  - The image path for your custom styles should be mapped to `/output/images`
  - The stylenames will be inherited from your CSV *without* the filename extension
4. Run `nodemon index` to start the server
5. Open up `localhost:3000` (or whatever port you're using)
6. Upload your CSV (see sample CSV in `/example`)
7. Output will be written to `/output/places.kml`
8. Zip up the contents in `/ouput` folder and change the filename extension to `.kmz`
   - Make sure to just zip up the contents and *not* the folder itself. When opening the .zip file, it should only show:
     - /images
     - places.kml
9. Upload to Google Maps or Google Earth

# To-do's

- Add action to zip output folder -> rename to KML
- Pull filename into the `<name>` element
- Convert this project over to React
- Create a walk-through flow to create the KMZ file. It should go as follows:
  - Upload the `/images` folder
    - This will create the `<style>`s in the KML
  - Upload the CSV with these options:
    - Remove first row (headers): `boolean`
    - Parse coordinates: `boolean`

# Useful things

## Google Sheets geocoding function

If you're creating these CSV's in Google sheets, you can use this custom function to Geocode addresses into latitude/longitude automatically.

```
/**
 * Returns latitude and longitude values for given address using the Google Maps Geocoder.
 *
 * @param {string} address - The address you get the latitude and longitude for.
 * @customfunction
 */
function GEOCODE_GOOGLE(address) {
    if (address.map) {
        return address.map(GEOCODE_GOOGLE)
    } else {
        var r = Maps.newGeocoder().geocode(address)
        for (var i = 0; i < r.results.length; i++) {
            var res = r.results[i]
            return res.geometry.location.lat + ", " + res.geometry.location.lng
        }
    }
}

/**
 * Returns latitude and longitude values for given address using the Yandex Geocoder.
 *
 * @param {string} address - The address you get the latitude and longitude for.
 * @customfunction
 */
function GEOCODE_YANDEX(address) {
    if (address.map) {
        return address.map(GEOCODE_YANDEX)
    } else {
        input = encodeURI(address)
        var r = UrlFetchApp.fetch(
            "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" +
            input + "&results=1&lang=en-US", {
                "method": "get"
            })
        var res = JSON.parse(r)
        try {
            res = res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
            res = res.split(" ")[1] + ", " + res.split(" ")[0]
            return res
        } catch (e) {
            return ""
        }
    }
}
```

***Source: https://discourse.looker.com/t/get-latitude-longitude-for-any-location-through-google-sheets-and-plot-these-in-looker/5402***
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=eb86b3d2b5e8cf2bd45fe98e7a5ef436&query=${latitude},${longitude}`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to wheather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const current = body.current;
      callback(
        undefined,
        `${current.weather_descriptions[0]} it is currently ${current.temperature} degrees out. It feels like ${current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;

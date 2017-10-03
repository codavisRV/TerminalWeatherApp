const request = require("request");

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/3822e864d9c512b9406013580fb1daa0/${lat},${lng}`,
        json: true,
        },
        (error, response, body) => {
            if (!error && response.statusCode === 200) {
                callback(undefined, {
                    body: body
                });
            } else {
                callback('There was a problem fetching the weather.');
            }
        }
    );
}

module.exports = {
    getWeather,
}
const yargs = require('yargs'); 
const geocode = require('./functions/geocode.js');
const weather = require('./functions/weather.js');

const argv = yargs.options({ 
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address, city or ZIP code you want weather for.',
        string: true,
    }
}).help().alias('help', 'h').argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        return console.log(errorMessage);
    }
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                return console.log(errorMessage);
            }
                console.log(`-----Weather for ${results.address}-----`);
                console.log(`Current temp: ${weatherResults.body.currently.temperature}.`);
                console.log(`Today's summary: ${weatherResults.body.currently.summary}`);
                console.log(`Today's high: ${weatherResults.body.daily.data[0].temperatureMax}`);
                console.log(`Tomorrow's high: ${weatherResults.body.daily.data[1].temperatureMax}`);
                console.log(`Tomorrows summary: ${weatherResults.body.daily.data[1].summary}`);
                console.log(`----------`);
        });
});




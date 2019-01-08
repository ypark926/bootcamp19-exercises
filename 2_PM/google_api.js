// TODO - create client object for Google API connection which can be exported
const config = require('./config')

const googleMapsClient = require('@google/maps0').createClient({
    key = config.apiKey,
    Promise: Promise
})

module.exports = googleMapsClient
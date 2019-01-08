// TODO: Add Google API key here - first hardcoded, then as environment variable.
const dotenv = require('dotenv')
dontenv.config()

const config = {
    apiKey: process.env.API_KEY
};

module.exports = config
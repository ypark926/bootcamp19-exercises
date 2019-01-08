/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */

const client = require('./google_api')

client.findPlace({input: process.argv[2], inputtype: 'textquery'})
    .asPromise()
    .then((response) => {
        const placeid = response.json.candidates[0].place_id
        client.place({placeid}).asPromise().then(response => {
            const {lat, lng} = response.json.result.geometry.location
            console.log(`${process.argv[2]} is located at coordinates ${lat}, ${lng} at the address`).catch(err => {
                console.log(err)
            })
            })
        })
    })
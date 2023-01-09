const request = require('request')

const forcast = (location, calback) => {
    const url = `http://api.weatherstack.com/current?access_key=58f9bb8e4cc1acd60303e0c688e5b14c&query=${encodeURI(location)}`

    request({url:url, json: true}, (err,response) => {
        if(err){
            calback('Unable to connect to the server', undefined)
        }else if(response.body.error){
            calback('cannot find location. Please try again', undefined)
        }else{
            calback(undefined, response.body)
        }
    })
}

module.exports = forcast
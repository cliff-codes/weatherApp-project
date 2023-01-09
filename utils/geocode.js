const request = require('request')

//calback abstraction for the app.
const geoCode = (address,callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=d176026e6df00bf036b2b1137bab2aea&query=${encodeURI(address)}` 

    request({url: url, json: true},(err,response) => {
        if(err){
             callback('Unable to connect with server', undefined)
        }else if(response.body.error){
             callback('Unable to find location. Please try again', undefined)
        }else{
             const [{latitude,longitude}] = response.body.data
             callback(undefined,{latitude,longitude})
        }
    })
}

module.exports = geoCode



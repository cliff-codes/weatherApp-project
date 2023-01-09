// //Making http request using the request package from npm
const request = require('request')
const geoCode = require('./utils/geocode')
const forcast = require('./utils/forcast')

forcast('Drobo',(err,data) => {
     console.log('Error : ', err)
     console.log('Data : ', data)
})

// geoCode('Kumasi',(err,data) => {
//      console.log('Error',err)
//      console.log('Data',data)
// })


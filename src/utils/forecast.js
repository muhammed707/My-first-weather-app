const  request = require('request');


const forecast = (latitude, longitude, callback)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f1b726e1d472ff75b04fa0b5f9eebbd9`    
    request({url: url, json: true}, (error, response)=>{
        if(error){

            callback('cant connect to forecast server', undefined);
        }else 
        if( response.body.message){
            callback('cant get forecast data try another search', undefined);
        }else{
            callback(undefined, `the temprature is ${response.body.main.temp} the Weather is ${response.body.weather[1]}`)
        }
    })
}

module.exports = forecast;
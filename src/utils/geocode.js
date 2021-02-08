const request = require('request');


const geocode = (address, callback)=>{

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWFuaWVzanIxNyIsImEiOiJja2l4bDM0aWcxc2phMnVtbXp5dDBwN3duIn0.2EZybu4LBMA5cwhgJsDFug`;

    request({uri: url, json: true}, (error, response)=>{
      	if(error){
          callback('cant connect to server', undefined);
        } 
        else if(response.body.features.length === 0){
          callback('Unable to find location try another search', undefined)
        }
        else{
          callback(undefined, {
            latitude: response.body.features[0].center[1],
            longitude: response.body.features[0].center[0],
            location: response.body.features[0].place_name

          })
        }
        
    } )

  }

  module.exports = geocode;
const request = require('request')

const geoCode = (address,callback)=>{
    const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoic2hpdmFtMDAxIiwiYSI6ImNrYnp2OXJ6dTAyaTczMGxrNTRkeGZ6cG0ifQ.lxYO0JhAkmmq5ni29qTzzw&limit=1";
    request({url:geoURL,json:true},(error,response)=>{
    if(error){
        callback('Unable to connect to the internet');
    }
        else if(body.features.length===0){
         callback("Unable to find the place")
    }
    else{
        callback(undefined,{
            latitude:response.body.features[0].center[1],
            longitude:response.body.features[0].center[0],
            location:response.body.features[0].place_name
        })       
    }
})
}

module.exports = geoCode


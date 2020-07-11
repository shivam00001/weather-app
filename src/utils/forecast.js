const request = require('request')
const foreCast = (lat,long,callback)=>{
    const url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=fe6b8aba520c0c5156cded6e7c633b5c"
    request({url,json:true},(error,{body})=>{
    if(error){
    callback("Unable to connect to the internet")
        
    } 
    else if(body.cod==='400'){
        callback('unable to get the location')
    }
    else{
        callback(undefined,("Temprature is "+(body.main.temp-273.15)))     
    }
    })
}
module.exports = foreCast
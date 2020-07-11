const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs')
const request = require('request');
const geoCode = require('./utils/geocode')
const foreCast = require('./utils/forecast')


app.set('view engine','hbs')

const dirPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

app.set('views',viewPath)
hbs.registerPartials(partialsPath)
app.use(express.static(dirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        author:'shivam'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
               title:'about',
               author:'shivamkr'
               })
})

app.get('/help',(req,res)=>{
    res.render('help',{
               title:'Help',
               author:'shivamkr'
               })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'Help 404',
        author:'shivam',
        errorMessage:'Help page not found...'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Please provide a place to search'
        })
        
    }
    geoCode(req.query.address,(error,data = {})=>{
    if(error){
    return res.send({
        error:error
    })
        
    }
    foreCast(data.latitude,data.longitude,(error,forecastData = {})=>{
        if(error){
            return res.send({
                error:error
            })
        }
        res.send({
            forecast:'Not going to rain',
            place:data.location,
            address:req.query.address,
            temprature:forecastData
        })
//    console.log(data.location)
//    console.log(forecastData)
})
    
})
        
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        author:'shivam',
        errorMessage:'Page not found...'
    })
})

app.listen(3000,()=>{
    console.log("console")
})
//app.get('/weather',(req,res)=>{
//    res.send('Weather page')
//})
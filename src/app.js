const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const geocode = require('./utils/geocode');
const forcast = require('./utils/forecast');

// define paths for express config
const publicDir = path.join(__dirname, '../public');
const viewsDir = path.join(__dirname, '../templates/views');
const partialDir = path.join(__dirname, '../templates/partials')
// console.log(publicDir)
// set up hbs and views location

app.set('view engine', 'hbs');
app.set('views', viewsDir); 
hbs.registerPartials(partialDir);
//

app.use(express.static(publicDir))

// defining routes


app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        name:'Muhammed'
    })
})


app.get('/weather', (req, res)=>{
    
        if(!req.query.address){
        return res.send({
            error: 'Address must be provided'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location }={} )=>{
        if(error){
            return res.send(error);
        }
        // console.log(latitude)
        // console.log(longitude)
        // console.log(location)
        forcast(latitude, longitude, (error, forcastData)=>{
            if(error){
                return res.send(error);
            }else{
                res.send({
                    forcast: forcastData,
                    location,
                    address: req.query.address 
                })

            }
            // console.log('data', forcastData)
            
    
        }
        )
        
    })
    
    


    })
      
    





app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        name:'Muhammed',
        message: 'How can i help You'
      })  
})

app.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About',
    name:'Manie'
  })  
})

app.get('/help/*', (req, res)=>{
    res.render('404page', {
        errorMessage: 'Help page not found',
        title: '404',
        name:'Muhammed'
    })
})

app.get('*', (req, res)=>{
    res.render('404page', {
        errorMessage: 'page not found',
        title: '404',
        name:'Muhammed'
        
    })
})








app.listen(3000, ()=>{
    console.log('app running on port : 3000')
})

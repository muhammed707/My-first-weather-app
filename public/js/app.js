console.log('guy its working')




const weatherForm = document.querySelector('form');
const submitButton = document.querySelector('input')
const errorMessage = document.querySelector('#error-message');
const forecastMessage = document.querySelector('#forecast-message')



weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = submitButton.value;



    errorMessage.textContent = 'Loading..'
    forecastMessage.textContent = ''
    
    fetch(`http://localhost:3000/weather?address=${location}`).then( (response)=>{
        
    response.json().then((data)=>{
        if(data.error){
            errorMessage.textContent = data.error;
        }else{
            errorMessage.textContent = data.location
            forecastMessage.textContent =  data.forecast

            
        }
    })
    
})
     
    // console.log(location);
})
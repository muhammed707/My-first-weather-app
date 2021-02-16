



const weatherForm = document.querySelector('form');
const submitButton = document.querySelector('input')
const forecastMessage = document.querySelector('#forecast-message')
const errorMessage = document.querySelector('#error-message');



weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = submitButton.value;



    errorMessage.textContent = 'Loading..'
    forecastMessage.textContent = ''

    fetch(`/weather?address=${location}`).then( (response)=>{
        
    response.json().then((data)=>{
        if(data.error){
            errorMessage.textContent = data.error;
        }else{
            errorMessage.textContent = data.location
            forecastMessage.textContent =  data.forcast

            
        }
    })
    
})
     
    // console.log(location);
})
$.get("https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=96381a872b1b405c5bf83b2ed63d9561&mode=json&units=metric",
 function(api){

    console.log(api)
    console.log('Local temp: ' +api.main.temp + 'C')
})

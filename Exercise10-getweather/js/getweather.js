$.get("https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=dd0c2b39eab1c1d6c2213700353cc121",
    function (api) {
        $('.temp').html('Local Temp: ' + api.main.temp + 'C');
        $('.city').html('City: ' + api.name);
        $('.description').html('Description: ' + api.weather[0].description);

        $('.icon img').attr('src', 'https://openweathermap.org/img/wn/04n.png' + api.weather[0].icon + '.png');
    }
);
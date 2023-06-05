
$(document).ready(function() {
    // Section 1: Weather Forecast

    const apiKey = OPEN_WEATHER_APPID;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Phoenix&appid=${apiKey}`;

    // Function to convert temperature from Kelvin to Fahrenheit
    function convertKelvinToFahrenheit(kelvin) {
        return ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    }

    // Making AJAX GET request to retrieve weather forecast data
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Processing the received forecast data
            const forecastData = data.list;

            // Iterate through the forecast data
            for (let i = 0; i < forecastData.length; i += 8) {
                // Taking relevant forecast information
                const forecast = forecastData[i];
                const date = new Date(forecast.dt * 1000); // Convert timestamp to date
                const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                const temperature = convertKelvinToFahrenheit(forecast.main.temp); // Convert temperature to Fahrenheit
                const humidity = forecast.main.humidity;
                const wind = forecast.wind.speed;
                const pressure = forecast.main.pressure;
                const icon = forecast.weather[0].icon;

                // Creating HTML elements for each day's forecast
                const forecastElement = `
                  <div class="day-forecast">
                    <div class="day">${day}</div>
                    <div class="temperature">${temperature}°F</div>
                    <div class="extra-info">
                      <div>Humidity: ${humidity}%</div>
                      <div>Wind: ${wind} m/s</div>
                      <div>Pressure: ${pressure} hPa</div>
                    </div>
                    <div class="icon">
                      <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                    </div>
                  </div>
                `;

                // Appending the forecast element to the forecast container
                $('#forecast').append(forecastElement);
            }
        },
        error: function(error) {
            // Handling error during API request
            console.log('Error:', error);
            $('#forecast').text('Error retrieving forecast data');
        }
    });

    // Section 2: Mapbox Map

    // Initializing Mapbox map with access token
    mapboxgl.accessToken = myMapboxKey;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40], // Specify longitude and latitude of the center
        zoom: 9 //  initial zoom level
    });

    let marker;

    // Section 3: Search Functionality

    // Adding search functionality using Mapbox Geocoding API
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    // Adding geocoder control to the map
    map.addControl(geocoder);

    // Function to update forecast based on latitude and longitude
    function updateForecast(latitude, longitude) {
        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        // Clear existing forecast data
        $('#forecast').empty();

        // Make a new request to OpenWeatherMap API
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Processing the received forecast data
                const forecastData = data.list;

                // Iterate through the forecast data
                for (let i = 0; i < forecastData.length; i += 8) {
                    // Taking relevant forecast information
                    const forecast = forecastData[i];
                    const date = new Date(forecast.dt * 1000); // Convert timestamp to date
                    const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                    const temperature = convertKelvinToFahrenheit(forecast.main.temp); // Convert temperature to Fahrenheit
                    const humidity = forecast.main.humidity;
                    const wind = forecast.wind.speed;
                    const pressure = forecast.main.pressure;
                    const icon = forecast.weather[0].icon;

                    // Creating HTML elements for each day's forecast
                    const forecastElement = `
                      <div class="day-forecast">
                        <div class="day">${day}</div>
                        <div class="temperature">${temperature}°F</div>
                        <div class="extra-info">
                          <div>Humidity: ${humidity}%</div>
                          <div>Wind: ${wind} m/s</div>
                          <div>Pressure: ${pressure} hPa</div>
                        </div>
                        <div class="icon">
                          <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
                        </div>
                      </div>
                    `;

                    // Appending the forecast element to the forecast container
                    $('#forecast').append(forecastElement);
                }
            },
            error: function(error) {
                // Handling error during API request
                console.log('Error:', error);
                $('#forecast').text('Error retrieving forecast data');
            }
        });
    }

    // Section 4: Map Interaction

    // Adding a marker on map click
    map.on('click', function(e) {
        const lngLat = e.lngLat;

        // Updating marker position
        if (!marker) {
            marker = new mapboxgl.Marker().setLngLat(lngLat).addTo(map);
        } else {
            marker.setLngLat(lngLat);
        }

        // Logging the coordinates
        console.log('Coordinates:', lngLat);

        // Updating forecast for the clicked location
        const latitude = lngLat.lat;
        const longitude = lngLat.lng;
        updateForecast(latitude, longitude);
    });

    // Section 5: Updating Forecast based on Searched Location

    // Updating forecast based on searched location
    geocoder.on('result', function(e) {
        const location = e.result;
        const latitude = location.center[1];
        const longitude = location.center[0];

        // Updating marker position
        if (!marker) {
            marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
        } else {
            marker.setLngLat([longitude, latitude]);
        }

        // Updating forecast for the searched location
        updateForecast(latitude, longitude);
    });
});

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import search_icon from './Assets/search.png'
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import drizzle_icon from './Assets/drizzle.png';
import rain_icon from './Assets/rain.png';
import snow_icon from './Assets/snow.png';
import wind_icon from './Assets/wind.png';
import humidity_icon from './Assets/humidity.png';

export default function WeatherCard() {
    
    let apiKey = '2fbc1d5240ec77d63ced9dd0fbc7d941';
    const [wicon, setWicon] = useState(clear_icon);
    
    const search = async () => {
        const element = document.getElementsByClassName('city-input');

        if (element[0].value === '') {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

        try {
            let response = await fetch(url);
            let data = await response.json();

            const humidity = document.getElementsByClassName('humidity-percent');
            const wind = document.getElementsByClassName('wind-rate');
            const tempature = document.getElementsByClassName('weather-temp');
            const location = document.getElementsByClassName('weather-location');

            humidity[0].innerHTML = data.main.humidity + ' %';
            wind[0].innerHTML = data.wind.speed + ' km/h';
            tempature[0].innerHTML = data.main.temp + '°c';
            location[0].innerHTML = data.name;
            
            if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
                setWicon(clear_icon);

            } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
                setWicon(cloud_icon);
            }
              else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
                setWicon(drizzle_icon);
            }
            else if(data.weather[0].icon === '09d' || data.weather[0].icon ==='09n') {
                setWicon(rain_icon);
            }
            else if(data.weather[0].icon === '10d' || data.weather[0].icon ==='10n') {
                setWicon(rain_icon);
            }
            else if(data.weather[0].icon === '13d' || data.weather[0].icon ==='13n') {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon)
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const card = (
        <React.Fragment>
            <CardContent>
                <div className="top-bar">
                    <input type="search" className='city-input' placeholder='Search'></input>
                    <img src={search_icon} alt="search-icon" className='search-icon' onClick={() => search()}></img>
                </div>
                <div className='weather-image'>
                    <img src={wicon} alt="weather-icon"></img>
                </div>
                <div className='weather-temp'>24°c</div>
                <div className='weather-location'>London</div>
                <div className='data-container'></div>
                <div className='element'>
                    <img src={humidity_icon} alt='humidity' className='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>64%</div>
                        <div className="text">Humidity</div>
                    </div>
                    <img src={wind_icon} alt='wind' className='icon' />
                    <div className='data'>
                        <div className='wind-rate'>18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </CardContent>
        </React.Fragment>
    );

    return (
        <Box>
            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'auto', width: '607px', marginBottom: '10px', backgroundImage: 'linear-gradient(180deg, #130754, #3b2f80 100%)', marginTop: '75px' }}>{card}</Card>
        </Box>
    );
}


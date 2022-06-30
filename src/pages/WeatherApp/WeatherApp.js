import classes from './WeatherApp.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';


const WeatherApp = () => {
    const [data, setData] = useState({});
    const [city, setCity] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=zagazig&units=metric&appid=7fc4e4a2d8f50407615bf62977076488`);
            const { data } = request
            setData(data)
            return request
        }
        fetchData();
    }, [])

    const GetData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7fc4e4a2d8f50407615bf62977076488`)
            .then((res) => {
                setData(res.data)
            }).catch((res) => {
                if (res.status !== 200) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                }
            })
        setCity('')
    }

    const SearchInputCity = (e) => {
        if (e.key === 'Enter') {
            GetData();
        }
    }

    const handleOnClick = () => {
        GetData();
    }

    return (
        <Box className={classes.container}>
            <div className={classes.header}>
                <h1 className={classes.header}>The World's Weather at your fingertips</h1>
            </div>
            <div className={classes.card}>
                <div className={classes.search} >
                    <input
                        className={classes.searchBar}
                        type="text"
                        placeholder="Search"
                        value={city}
                        onChange={e => { setCity(e.target.value) }}
                        onKeyPress={SearchInputCity} />
                    <button className={classes.button} onClick={handleOnClick}>
                        <SearchIcon />
                    </button>
                </div>
                <div className={classes.weather.loading}>
                    {data.name ? <h2 className={classes.city}>Weather in <span>{data.name}</span></h2> : <h2 className={classes.city}>Weather in Zagazig</h2>}
                    {data.main ? <h1 className={classes.temp}>{data.main.temp.toFixed()}°C</h1> : <h1 className={classes.temp}>33°C</h1>}
                    <div className={classes.flex}>
                        {data.weather ? <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"} alt="icon" className="icon" /> : <img src="https://openweathermap.org/img/wn/04n.png" alt="icon" className="icon" />}
                        {data.weather ? <div className={classes.description}>{data.weather[0].description}</div> : <div className={classes.description}>Sunny</div>}
                    </div>
                    {data.main ? <div className={classes.humidity}>Humidity: {data.main.humidity}%</div> : <div className={classes.humidity}>Humidity: 60%</div>}
                    {data.wind ? <div className={classes.wind}>Wind speed: {data.wind.speed} km/h</div> : <div className={classes.wind}>Wind speed: 6.2 km/h</div>}
                </div>
            </div>
        </Box>
    )
}

export default WeatherApp
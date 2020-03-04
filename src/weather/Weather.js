import React from 'react';
import axios from 'axios';
import HomeBtn from '../HomeBtn';

class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            userZip: '',
            weatherData: [],
            main: [],
            description: '',
            icon: '',
            temp: '',
            feels_like: '',
            temp_min: '',
            temp_max: '',
            humidity: '',
            wind_speed: '',
        }
        this.getWeather = this.getWeather.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getWeather() {
        const KEY = "2510cc4345ae2fb5c4f9c8f0053faa8c";
        axios({
            method: 'get',
            url: "https://api.openweathermap.org/data/2.5/weather?zip=" + this.state.userZip + "&appid=" + KEY,
        })
            .then(response => {
                console.log(response.data);
                this.setState({
                    weatherData: response.data,
                    main: response.data.main,
                    description: response.data.weather[0].description,
                    icon: response.data.weather[0].icon,
                    temp: Math.round(((response.data.main.temp - 273.15) * 9 / 5) + 32),
                    feels_like: Math.round(((response.data.main.feels_like - 273.15) * 9 / 5) + 32),
                    temp_min: Math.round(((response.data.main.temp_min - 273.15) * 9 / 5) + 32),
                    temp_max: Math.round(((response.data.main.temp_max - 273.15) * 9 / 5) + 32),
                    humidity: response.data.main.humidity,
                    wind_speed: response.data.wind.speed,
                });
                console.log(this.state);
            });
    };

    handleZipChange(event) {
        console.log(this.state.userZip);
        this.setState({ userZip: event.target.value })
    };

    handleSubmit(event) {
        event.preventDefault();
        this.getWeather();
    }

    render() {
        const icon_url = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
        console.log(icon_url);
        return (
            <>
                <HomeBtn />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <p className="display-4 text-light">Local Weather</p>
                            <p className="display-5 text-light">Enter a zip code to get current weather update</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <form onSubmit={this.handleSubmit}>
                                <input type="TEL" value={this.state.userZip} onChange={this.handleZipChange} placeholder="zip code e.g. 40517" className="mb-3" />
                                <input type="submit" className="btn btn-block mb-4" />
                            </form>
                        </div>
                    </div>
                </div>

                {this.state.weatherData === '' ? null: 
                    <div className="container text-light">
                        <div className="row">
                            <div className="col-sm-12 col-lg-5">
                                <p className="display-4">{this.state.weatherData.name}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-lg-5">
                                <img src={icon_url} alt="weather icon" ></img>
                                <p>{this.state.description}</p>
                                <p>Temperature <br />Current: {this.state.temp}° | LH: {this.state.temp_min}°/{this.state.temp_max}° | Feels Like: {this.state.feels_like}°</p>
                                <p>Wind <br />{this.state.wind_speed} mph</p>
                                <p>Humidity <br />{this.state.humidity}%</p>
                            </div>
                        </div>
                    </div>
                    
                }
            </>
        )
    }
}

export default Weather;
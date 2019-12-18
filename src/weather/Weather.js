import React from 'react';
import axios from 'axios';
import HomeBtn from '../HomeBtn';

class Weather extends React.Component {

    constructor() {
        super();
        this.state = {
            userZip: "40515",
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather() {
        const KEY = "2510cc4345ae2fb5c4f9c8f0053faa8c";
        axios({
            method: 'get',
            url: "https://api.openweathermap.org/data/2.5/weather?zip=" + this.state.userZip + "&appid=" + KEY,
        })
            .then(response => {
                console.log(response.data);
            });
    }

    componentDidMount() {
        this.getWeather();
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <HomeBtn />
                        </div>
                    </div>
                </div>
                <div className="text-light">
                    Weather App
            </div>
            </>
        )
    }
}

export default Weather;
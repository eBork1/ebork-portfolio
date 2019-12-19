import React from 'react';
import HomeBtn from '../HomeBtn';

class CountdownTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: '', // Current local date
            endDate: '', // End month, day, year
            endTime: '', // End time, hour, min, sec
            sec_remaining: '',
            min_remaining: '',
            hours_remaining: '',
            days_remaining: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.resetTime = this.resetTime.bind(this);
    }

    // Set the interval to tick every sec
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // Get current date, store in state
    tick() {
        const date = new Date().getTime();
        this.setState({ currentDate: date });
    }

    handleDateChange(event) {
        this.setState({ endDate: event.target.value })
    }

    handleTimeChange(event) {
        this.setState({ endTime: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        setInterval(() => {
            this.calculateTimeLeft();
        }, 1000);
        console.log(this.state);
    }

    calculateTimeLeft() {
        // Got the users end date+time and combined them into the JS Date() format
        // Converted the combined date and time to milliseconds so it can be compared with the current date (also in milliseconds)
        // Calculated time left and stored it in State
        const COMBINED_DATE = this.state.endDate + "T" + this.state.endTime + ":00";
        const END_DATE = new Date(COMBINED_DATE).getTime();
        const TIME_LEFT = END_DATE - this.state.currentDate;

        // Converted the milliseconds back to individual variables for min/sec/hour day/month/year
        const DAYS = Math.floor(TIME_LEFT / (1000 * 60 * 60 * 24));
        const HOURS = Math.floor((TIME_LEFT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const MINUTES = Math.floor((TIME_LEFT % (1000 * 60 * 60)) / (1000 * 60));
        const SECONDS = Math.floor((TIME_LEFT % (1000 * 60)) / 1000);


        this.setState({
            days_remaining: DAYS,
            hours_remaining: HOURS < 10 ? "0" + HOURS : HOURS,
            min_remaining: MINUTES < 10 ? "0" + MINUTES : MINUTES,
            sec_remaining: SECONDS < 10 ? "0" + SECONDS : SECONDS
        });

    }

    resetTime() {
        this.setState({
            endDate: '',
            endTime: '',
            days_remaining: '',
            hours_remaining: '',
            min_remaining: '',
            sec_remaining: '',
        });
        window.location.reload(false);
    }

    render() {
        // console.log(this.state);
        return (
            <>
                <HomeBtn />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <p className="display-4 text-white">End Date</p>
                            <form onSubmit={this.handleSubmit}>
                                <input className="m-2" type="date" name="date" value={this.state.endDate} onChange={this.handleDateChange} /> <br />
                                <input className="m-2" type="time" name="time" value={this.state.endTime} onChange={this.handleTimeChange} /> <br />
                                <input type="submit" className="btn btn-block" />
                            </form>
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="display-3 text-white">
                                {this.state.days_remaining ? this.state.days_remaining + " days" : null}
                            </p><br />
                            <p className="display-4 text-white">
                                {this.state.hours_remaining ? this.state.hours_remaining + ":" : null}
                                {this.state.min_remaining ? this.state.min_remaining + ":" : null}
                                {this.state.sec_remaining ? this.state.sec_remaining : null}
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-5">
                            <button className="btn btn-block fixed-bottom mb-2" onClick={this.resetTime}>Reset</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CountdownTimer;
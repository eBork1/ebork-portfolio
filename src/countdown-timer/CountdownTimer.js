import React from 'react';

class CountdownTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentDate: '', // Current local date
            endDateFull: '', // Full end date + time
            endDate: '', // End month, day, year
            endTime: '', // End time, hour, min, sec
            timeLeft: '',
            sec: '',
            min: '',
            hour: '',
            day: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
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
        const date = new Date().toLocaleString();
        // console.log(date);
        this.setState({ currentDate: date });
        // console.log(this.state);
    }

    handleDateChange(event) {
        this.setState({ endDate: event.target.value })
    }

    handleTimeChange(event) {
        this.setState({ endTime: event.target.value })
    }

    handleSubmit(event) {
        console.log(this.state.endDate);
        console.log(this.state.endTime);
        console.log("current time: " + this.state.currentDate);
        event.preventDefault();
        this.calculateTimeLeft();
    }

    calculateTimeLeft(){
        const END_DATE = this.state.endDate + ", " + this.state.endTime;
        console.log("end date: " + END_DATE);
        
        const timeLeft = END_DATE - this.state.currentDate;
        console.log(JSON.stringify(timeLeft));
    }

    render() {
        // console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-5">
                        <p className="display-4 text-white">End Date</p>
                        <form onSubmit={this.handleSubmit}>
                            <input className="m-2" type="date" name="date" value={this.state.endDate} onChange={this.handleDateChange} /> <br />
                            <input className="m-2" type="time" name="time" value={this.state.endTime} onChange={this.handleTimeChange} /> <br />
                            <input type="submit" className="btn btn-block" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountdownTimer;
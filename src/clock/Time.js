import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        };
    }
    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    buttonWasClicked() {
        alert('clicked');
    }
    render() {
        return (
            <p className="display-5 text-light text-center">
                {this.state.time}
            </p>
        );
    }
}

export default Time;
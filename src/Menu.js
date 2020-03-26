import React from 'react';
import Card from './Card';

class Menu extends React.Component {
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-lg-5 mx-auto">
                    <Card
                        title="Countdown Timer"
                        description="Countdown to a certain date!"
                        buttonText="Start"
                        href="/countdowntimer"
                    />
                    <Card
                        title="Local Weather"
                        description="Get the current conditions for your area."
                        buttonText="Start"
                        href="/weather"
                    />
                    {/* <Card
                        title="Mind Reader"
                        description="Try to beat it, I bet you can't!"
                        buttonText="Play"
                        href="#"
                    /> */}
                    <Card
                        title="Tic Tac Toe"
                        description="A classic. 2 players required."
                        buttonText="Start"
                        href="tic-tac-toe"
                    />
                    <Card
                        title="To-Do-List"
                        description="Add and check off tasks to be completed"
                        buttonText="Start"
                        href="/to-do-list"
                    />
                    <Card
                        title="Calculator"
                        description="its a calculator"
                        buttonText="Start"
                        href="/calculator"
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default Menu;
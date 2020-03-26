import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Clock from './clock/Clock';
import Menu from './Menu';
import CountdownTimer from './countdown-timer/CountdownTimer';
import Weather from './weather/Weather';
import Game from './tic-tac-toe/TicTacToe';
import Todo from './to-do-list/todo';
import Calculator from './calculator/Calculator';

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 mx-auto">
                        <p className="display-4" id="title"> Bootcamp Portfolio</p>
                        <h3 id="title"> Ethan Borkosky</h3>
                        <p id="title">Best viewed on mobile!</p>
                    </div>
                </div>
            </div>
            <Clock />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Menu />
                    </Route>
                    <Route exact path="/countdowntimer">
                        <CountdownTimer />
                    </Route>

                    <Route exact path="/weather">
                        <Weather />
                    </Route>
                    <Route exact path="/mind-reader">
                        <CountdownTimer />
                    </Route>
                    <Route exact path="/tic-tac-toe">
                        <Game />
                    </Route>
                    <Route exact path="/calculator">
                        <Calculator />
                    </Route>
                    <Route exact path="/sliding-puzzle">
                        <CountdownTimer />
                    </Route>
                    <Route exact path="/to-do-list">
                        <Todo />
                    </Route>
                </Switch>
            </Router>
        </div>



    );
}

export default App;

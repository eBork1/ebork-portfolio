import React from 'react';
import '../calculator/Calculator.css';
import { evaluate } from 'mathjs';

function Button(props) {
    return (
        <button className="border" id="calcButton" onClick={props.onClick}>
            {props.value}
        </button>

    )
}

export default class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            equation: [],
            display: "",
            operator: "",
        }
    }

    renderButton(value) {
        return (
            <Button
                value={value}
                onClick={() => { this.handleClick(value) }}
            />
        )
    }

    handleClick(value) {
        if (value === "=") {
            // add current display number to end of equation and calculate
            this.state.equation.push(this.state.display);
            this.calculate();
        } else {
            if (value === "/" || value === "*" || value === "-" || value === "+") {
                // update equation array with the current display (first num) and then the operator
                this.state.equation.push(this.state.display, value);
                // update operator display and reset main display
                this.setState({
                    operator: value,
                    display: ""
                });
            } else {
                // concat current display with new value to add to the current number being entered
                let newValue = this.state.display + value;
                this.setState({ display: newValue });
            }
        }
    }

    calculate() {
        let equation = this.state.equation.join("");
        let answer = evaluate(equation);
        this.setState({
            display: answer,
            equation: [],
        });
    }

    clear() {
        this.setState({
            equation: [],
            display: "",
            operator: "",
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-sm-12 border text-white mx-auto" id="calcDisplay">
                        {this.state.display}
                        <p className="text-muted">
                            {this.state.operator}
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
                        <button className="border" id="calcButton" onClick={() => { this.clear() }}>
                            C
                        </button>
                        {this.renderButton("(")}
                        {this.renderButton(")")}
                        {this.renderButton("/")}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
                        {this.renderButton(7)}
                        {this.renderButton(8)}
                        {this.renderButton(9)}
                        {this.renderButton("*")}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
                        {this.renderButton(4)}
                        {this.renderButton(5)}
                        {this.renderButton(6)}
                        {this.renderButton("-")}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
                        {this.renderButton(1)}
                        {this.renderButton(2)}
                        {this.renderButton(3)}
                        {this.renderButton("+")}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-sm-12 mx-auto">
                        {this.renderButton("+/-")}
                        {this.renderButton(0)}
                        {this.renderButton(".")}
                        {this.renderButton("=")}
                    </div>
                </div>
            </div>

        )
    }
}
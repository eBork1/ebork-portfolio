import React from 'react';
import '../calculator/Calculator.css';
import {
    atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs';

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
            this.state.equation.push(this.state.display);
            this.calculate();
        } else {
            if (value === "/" || value === "*" || value === "-" || value === "+") {
                this.state.equation.push(this.state.display, value);
                this.setState({
                    operator: value,
                    display: ""
                });
                console.log(this.state.equation);
            } else {
                let newValue = this.state.display + value;
                this.setState({ display: newValue });
                console.log(this.state.equation);
            }
        }
    }

    calculate() {
        let equation = this.state.equation.join("");
        console.log(equation);
        let answer = evaluate(equation);
        this.setState({
            display: answer,
            equation: [],
        });

        console.log(answer);
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
                        <button className="border" id="calcButton" onClick={() => {this.clear()}}>
                            C
                        </button>
                        {this.renderButton("()")}
                        {this.renderButton("%")}
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
import React from 'react';
import './Card.css';
class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
    }

    render(props) {
        return (
            <div>
                <div className="card mt-2 mb-2 shadow">
                    <div className="card-body">
                        <h5 className="card-title text-light font-weight-bold border-bottom">{this.props.title}</h5>
                        <p className="card-subtitle mb-2 text-light">{this.props.description}</p>
                        <a href={this.props.href}>
                            <button onClick={this.props.onClick} className="btn btn-block shadow-lg">{this.props.buttonText}</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
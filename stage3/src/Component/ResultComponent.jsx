import React, { Component } from 'react';
import './ResultComponent.css';
import result from '../result.jpg';
import {Link} from 'react-router-dom';

class ResultComponent extends Component {
    render() {
        return (
            <div className="container2">
                <div className="img">
                    <img src={result} height="200px" width="200px"></img>
                </div>
                <div className="quiz1">
                    <span>Your Score: {this.props.right*10}%</span>
                    <div>
                        <span>Total number of questions:</span>
                        <span>{this.props.total}</span>
                    </div>
                    <div>
                        <span>Number of attempted questions:</span>
                        <span>{this.props.attempt}</span>
                    </div>
                    <div>
                        <span>Number of correct answers:</span>
                        <span>{this.props.right}</span>
                    </div>
                    <div>
                        <span>Number of wrong answers:</span>
                        <span>{this.props.wrong}</span>
                    </div>
                </div>
                <div>
                <Link to="/">
                    <button className="button4">Play Again</button>
                </Link>
                </div>
            </div>
        );
    }
}

export default ResultComponent;
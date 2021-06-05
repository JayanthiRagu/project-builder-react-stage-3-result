import React, { Component } from 'react';
import './HomeComponent.css';
import QuizComponent from './QuizComponent.jsx';
import {Link} from 'react-router-dom';

class HomeComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="container">
                <h1>Quiz App</h1>
                <Link to="/quiz">
                    <button className="buttons">Play</button>
                </Link>
            </div>
        );
    }
}

export default HomeComponent;
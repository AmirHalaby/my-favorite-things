import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


class HomePage extends Component {
    render() {
        return (
            <div>
                <ul className="App-header">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Cat">Cat</Link>
                    </li>
                    <li>
                        <Link to="/Foodish">Foodish</Link>
                    </li>
                    <li>
                        <Link to="/Coffee">Coffee</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark fixed-top bg-dark">
            <div className="container">
                <h3 className="text-white-50">Alexander Thompson</h3>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link btn nav-btn text-color " href="/Contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default Navbar;
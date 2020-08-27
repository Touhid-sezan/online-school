import React from 'react';
import logo from '../../images/programming-hero-web-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container Header">
            <img src={logo} alt=""/>
            <p>The Best Online Learning Platform</p>
        </div>
    );
};

export default Header;
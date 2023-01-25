import React from 'react';
import './Navbar.scss';
import logo from '../assets/1Click.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className='nav'>
            <img src={logo} alt="logo" />
            <div className='menuItems'>
                <span>Home</span>
                <span>Blog</span>
                <span>Privacy Policy</span>
                <span>Contact</span>
                <span className='getStrtBtn'>Get Started<FontAwesomeIcon className='arrowIcon' icon={faAngleRight} size="2x" color="white" /></span>
            </div>
        </div>
    );
};

export default Navbar;
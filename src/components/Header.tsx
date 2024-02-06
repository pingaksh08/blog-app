import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <Link to={"/"} className='logo'>Blog App</Link>
                <nav>
                    <Login />
                    <Signup />
                </nav>
            </header></>
    )
}

export default Header
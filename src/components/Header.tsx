import React from 'react';
import Login from './Login';
import Signup from './Signup';

const Header = () => {
    return (
        <>
            <header>
                <a href='' className='logo'>Blog App</a>
                <nav>
                    <Login />
                    <Signup />
                </nav>
            </header></>
    )
}

export default Header
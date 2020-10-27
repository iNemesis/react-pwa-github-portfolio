import React from 'react';
import './Header.css';

const Header = ({ logo }) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            My Github Portfolio
        </h1>
    </header>
);

export default Header;

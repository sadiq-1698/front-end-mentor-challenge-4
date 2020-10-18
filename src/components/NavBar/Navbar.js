import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <nav className={ darkMode ? "navbar dark" : "navbar" }>
            <div className="left">
                <span>Where in the world?</span>
            </div>
            <div className="right" onClick={toggleDarkMode}>
                <i className={ darkMode ? "fa fa-moon-o dark" : "fa fa-moon-o" } aria-hidden="true"></i>
                <span>Dark Mode</span>
            </div>
        </nav>
    )

    function toggleDarkMode(){
        setDarkMode(() => !darkMode);
    }

}

export default Navbar;

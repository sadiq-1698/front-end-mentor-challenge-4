import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const Navbar = () => {

    const { darkMode, setDarkMode } = useContext(ThemeToggle);

    return (
        <nav className={ darkMode ? "navbar dark" : "navbar" }>
            <div className="left">
                <span >Where in the world?</span>
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

// const RandomElement = () => {
//     return (
//         <div styles={{display : "none"}}>
//             <h1>Random element here</h1>
//         </div>
//     );
// }



export default Navbar;

import React, {useContext} from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const Searchbar = () => {

    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className="search-bar">
            <div className="search-bar-content">
                <div className={ darkMode ? "search-icon-container dark" : "search-icon-container"}>
                    <i className={ darkMode ? "fa fa-search dark" : "fa fa-search"} aria-hidden="true"></i>
                </div>
                <input 
                    className={ darkMode ? "dark" : null} 
                    placeholder="Search for a country...">
                </input>
            </div>
        </div>
    )
}

export default Searchbar;

import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const FilterDropdown = () => {

    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className="filter-dropdown">
            <div className={darkMode ? "content-container dark" : "content-container"}>
                <span className={darkMode ? "dark" : null}>
                    Filter by Region
                </span>
                <div className="dropdown-icon-container">
                    <i className={darkMode ? "fa fa-angle-down dark" : "fa fa-angle-down"} aria-hidden="true"></i>
                </div>
            </div>
        </div>
    );
}

export default FilterDropdown;

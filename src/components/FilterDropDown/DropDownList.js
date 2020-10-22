import React, { useContext } from 'react';
import ToggleDropDown from '../../context/ToggleDropDown';
import ThemeToggle from '../../context/ThemeToggle';
import './styles.css';

const DropDownList = () => {

    // use context
    const { dropDownOpen } = useContext(ToggleDropDown);
    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className={ dropDownOpen ? darkMode ? "dropdown-container display dark" : "dropdown-container display" : "dropdown-container"}>
            <ul className={darkMode ? "dark" : null}>
                <li>Africa</li>
                <li>America</li>
                <li>Asia</li>
                <li>Europe</li>
                <li>Ociania</li>
            </ul>
        </div>
    )
}

export default DropDownList;

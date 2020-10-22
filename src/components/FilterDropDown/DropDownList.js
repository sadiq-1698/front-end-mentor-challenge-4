import React, { useContext } from 'react';
import ToggleDropDown from '../../context/ToggleDropDown';
import ThemeToggle from '../../context/ThemeToggle';
import Countries from '../../context/Countries';
import './styles.css';

const DropDownList = () => {

    // use context
    const { dropDownOpen } = useContext(ToggleDropDown);
    const { darkMode } = useContext(ThemeToggle);
    const { setDisplayList, countryList } = useContext(Countries);

    //helper functions
    const chooseRegion = (regionName) => {
        let tempArray = countryList.filter(function(country) {
            let currentCountryRegion = country.region;
            return currentCountryRegion === regionName;
        });
        setDisplayList(tempArray);
    }

    return (
        <div className={ dropDownOpen ? darkMode ? "dropdown-container display dark" : "dropdown-container display" : "dropdown-container"}>
            <ul className={darkMode ? "dark" : null}>
                <li onClick={(e)=> chooseRegion(e.target.innerHTML)}>Africa</li>
                <li onClick={(e)=> chooseRegion(e.target.innerHTML)}>Americas</li>
                <li onClick={(e)=> chooseRegion(e.target.innerHTML)}>Asia</li>
                <li onClick={(e)=> chooseRegion(e.target.innerHTML)}>Europe</li>
                <li onClick={(e)=> chooseRegion(e.target.innerHTML)}>Oceania</li>
            </ul>
        </div>
    )
}

export default DropDownList;

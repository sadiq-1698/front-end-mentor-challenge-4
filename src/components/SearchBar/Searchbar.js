import React, {useContext} from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';
import Countries from '../../context/Countries';

const Searchbar = () => {

    const { darkMode } = useContext(ThemeToggle);
    const { countryList, setDisplayList } = useContext(Countries);

    return (
        <div className="search-bar">
            <div className="search-bar-content">
                <div className={ darkMode ? "search-icon-container dark" : "search-icon-container"}>
                    <i className={ darkMode ? "fa fa-search dark" : "fa fa-search"} aria-hidden="true"></i>
                </div>
                <input 
                    className={ darkMode ? "dark" : null} 
                    placeholder="Search for a country..."
                    onChange={(event) => {
                        let tempArray = countryList.filter(function(country) {
                            let countryName = country.name.toLowerCase();
                            return countryName.includes(event.target.value.trim().toLowerCase());
                        });
                        setDisplayList(tempArray);
                    }}
                />
            </div>
        </div>
    )
}

export default Searchbar;

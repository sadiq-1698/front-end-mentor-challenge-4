import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const Card = () => {

    const imageStyles = {
        maxWidth : "100%",
        maxHeight : "100%",
        borderTopLeftRadius : "5px",
        borderTopRightRadius : "5px"
    }
    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className={darkMode ? "country-card dark" : "country-card"}>
            <div className="image-container">
                <img 
                    src="https://restcountries.eu/data/afg.svg" 
                    alt="country" 
                    style={imageStyles}
                />
            </div>
            <div className="country-details">
                <h1 className={darkMode ? "dark" : null} >Afghanistan</h1>
                <div className="more-details">
                    <h4 className={darkMode ? "dark" : null}>Population:<span >&nbsp;81,770,990</span></h4>
                    <h4 className={darkMode ? "dark" : null}>Region:<span >&nbsp;Europe</span></h4>
                    <h4 className={darkMode ? "dark" : null}>Capital:<span >&nbsp;Berlin</span></h4>
                </div>
            </div>
        </div>
    )
}



export default Card;

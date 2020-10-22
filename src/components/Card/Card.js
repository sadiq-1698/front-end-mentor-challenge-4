import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const Card = (props) => {

    // card styles
    const imageStyles = {
        maxWidth : "100%",
        maxHeight : "100%",
        borderTopLeftRadius : "5px",
        borderTopRightRadius : "5px"
    }

    // use context
    const { darkMode } = useContext(ThemeToggle);

    // helper functions
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // component
    return (
        <div className={darkMode ? "country-card dark" : "country-card"}>
            <div className="image-container">
                <img 
                    src={props.flag} 
                    alt="country" 
                    style={imageStyles}
                />
            </div>
            <div className="country-details">
                <h1 className={darkMode ? "dark" : null} >{props.name}</h1>
                <div className="more-details">
                    <h4 className={darkMode ? "dark" : null}>Population:<span>&nbsp;{numberWithCommas(props.population)}</span></h4>
                    <h4 className={darkMode ? "dark" : null}>Region:<span>&nbsp;{props.region}</span></h4>
                    <h4 className={darkMode ? "dark" : null}>Capital:<span>&nbsp;{props.capital}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Card;

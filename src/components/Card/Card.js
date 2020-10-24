import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';
import SwitchPage from '../../context/SwitchPage';
import Countries from '../../context/Countries';

const Card = ({country}) => {

    // card styles
    // const imageStyles = {
    //     maxWidth : "100%",
    //     maxHeight : "100%",
    //     borderTopLeftRadius : "5px",
    //     borderTopRightRadius : "5px",
    // }

    // use context
    const { darkMode } = useContext(ThemeToggle);
    const { setShowDetailsPage } = useContext(SwitchPage);
    const { setCurrentCountry } = useContext(Countries);

    // helper functions
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function showDetailsPage(){
        setCurrentCountry(country);
        setShowDetailsPage(true);
    }

    // component
    return (
        <div className={darkMode ? "country-card dark" : "country-card"} onClick={showDetailsPage} >
            <div 
                className="image-container" 
                style={{backgroundImage: `url(${country.flag})`}}>
            </div>
            <div className="country-details">
                <h1 className={darkMode ? "dark" : null} >{country.name}</h1>
                <div className="more-details">
                    <h4 className={ darkMode ? "dark" : null }>Population:<span>&nbsp;{numberWithCommas(country.population)}</span></h4>
                    <h4 className={ darkMode ? "dark" : null }>Region:<span>&nbsp;{country.region}</span></h4>
                    <h4 className={ darkMode ? "dark" : null }>Capital:<span>&nbsp;{country.capital}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Card;

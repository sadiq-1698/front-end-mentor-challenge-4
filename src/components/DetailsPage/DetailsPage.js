import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const DetailsPage = () => {

    const { darkMode } = useContext(ThemeToggle);

    const Background = "https://restcountries.eu/data/afg.svg";

    return (
        <div className="details-page">

            <div className={darkMode ? "back-btn dark" : "back-btn"}>
                <i className={darkMode ? "fa fa-arrow-left dark" : "fa fa-arrow-left"} aria-hidden="true"></i>
                <span>Back</span>
            </div>


            <div className={darkMode ? "details-container dark" : "details-container"}>
                <div className="image-container" style={{backgroundImage: `url(${Background})`}}>
                </div>
                <div className="only-desktop"></div>
                <div className="right-section">
                    <div className="top">
                        <div className="first">
                            <h1>Country</h1>
                            <div className="more-details">
                                <h4 >Native Name:<span>&nbsp;Jublaka</span></h4>
                                <h4 >Population:<span>&nbsp;Jinglees</span></h4>
                                <h4 >Region:<span>&nbsp;Manglees</span></h4>
                                <h4 >Sub Region:<span>&nbsp;Jinglees</span></h4>
                                <h4 >Capital:<span>&nbsp;Manglees</span></h4>
                            </div>
                        </div>
                        <div className="second">
                            <h4 >Top Level Domain:<span>&nbsp;Jublaka</span></h4>
                            <h4 >Currencies:<span>&nbsp;Jinglees</span></h4>
                            <h4 >Languages:<span>&nbsp;Manglees</span></h4>
                        </div>
                    </div>   
                    <div className="third">
                        <h4>Border Countries:&nbsp;&nbsp;</h4>
                        <div className="third-right">
                            <span>One</span>
                            <span>Two</span>
                            <span>Three</span>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;

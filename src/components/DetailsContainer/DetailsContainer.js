import React, {useContext} from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';
import TopSection from './TopSection';
import BottomSection from './BottomSection';


const DetailsContainer = (props) => {

    const { darkMode } = useContext(ThemeToggle);

    const countryDetails = props.countryDetails;

    const Background = countryDetails.flag;

    return (
        <div className={darkMode ? "details-container dark" : "details-container"}>
                
                <div 
                    className="image-container" 
                    style={{backgroundImage: `url(${Background})`}}>
                </div>

                <div className="only-desktop"></div>

                <div className="right-section">
                    <TopSection 
                        countryDetails = {countryDetails}
                    />
                    <BottomSection 
                        countryDetails = {countryDetails}
                    />
                </div>
            </div>
    );
}

export default DetailsContainer;
import React, {useContext} from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';
import TopSection from './TopSection';
import BottomSection from './BottomSection';


const DetailsContainer = () => {

    const { darkMode } = useContext(ThemeToggle);

    const Background = "https://restcountries.eu/data/afg.svg";

    return (
        <div className={darkMode ? "details-container dark" : "details-container"}>
                
                <div 
                    className="image-container" 
                    style={{backgroundImage: `url(${Background})`}}>
                </div>

                <div className="only-desktop"></div>

                <div className="right-section">
                    <TopSection />
                    <BottomSection />
                </div>
            </div>
    );
}

export default DetailsContainer;
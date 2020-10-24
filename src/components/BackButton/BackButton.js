import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';
import SwitchPage from '../../context/SwitchPage';

const BackButton = () => {

    // use context
    const { darkMode } = useContext(ThemeToggle);
    const { setShowDetailsPage } = useContext(SwitchPage);

    // helper functions
    function goToMainPage(){
        setShowDetailsPage(false);
    }

    return (
        <div className={darkMode ? "back-btn dark" : "back-btn"} onClick={goToMainPage}>
            <i className={darkMode ? "fa fa-arrow-left dark" : "fa fa-arrow-left"} aria-hidden="true"></i>
            <span>Back</span>
        </div>
    );
}

export default BackButton;

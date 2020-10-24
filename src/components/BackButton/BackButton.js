import React, {useContext} from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';

const BackButton = () => {

    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className={darkMode ? "back-btn dark" : "back-btn"}>
            <i className={darkMode ? "fa fa-arrow-left dark" : "fa fa-arrow-left"} aria-hidden="true"></i>
            <span>Back</span>
        </div>
    );
}

export default BackButton;

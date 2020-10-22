import React, {useContext} from 'react'
import ThemeToggle from '../../context/ThemeToggle';
import './styles.css';

const CardWrapper = () => {

    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className={darkMode ? "card-wrapper dark" : "card-wrapper"}>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
            <h1>Awesome</h1>
        </div>
    )
}

export default CardWrapper;

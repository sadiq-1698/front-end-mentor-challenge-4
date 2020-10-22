import React, {useContext} from 'react'
import ThemeToggle from '../../context/ThemeToggle';
import './styles.css';
import Card from '../Card/Card';

const CardWrapper = () => {

    const { darkMode } = useContext(ThemeToggle);

    return (
        <div className={darkMode ? "card-wrapper dark" : "card-wrapper"}>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardWrapper;

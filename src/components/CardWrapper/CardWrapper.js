import React , { useContext } from 'react';
import ThemeToggle from '../../context/ThemeToggle';
import './styles.css';
import Card from '../Card/Card';
import Countries from '../../context/Countries';
import Loader from '../Loader/Loader';

const CardWrapper = () => {

    const { darkMode } = useContext(ThemeToggle);
    const { displayList } = useContext(Countries);

    return (
        <div className={darkMode ? "card-wrapper dark" : "card-wrapper"}>
            {
                !displayList 
                ? 
                <Loader />
                : 
                displayList.map((country, index) => {
                    return <Card 
                                key={index}
                                name={country.name}
                                population={country.population}
                                flag={country.flag}
                                region={country.region}
                                capital={country.capital}
                            />
                })
            }
        </div>
    )
}



export default CardWrapper;

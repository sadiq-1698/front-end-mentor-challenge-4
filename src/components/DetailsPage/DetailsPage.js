import React, { useContext } from 'react';
import './styles.css';
import BackButton from '../BackButton/BackButton';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import Countries from '../../context/Countries';

const DetailsPage = () => {

    // use context
    const { currentCountry } = useContext(Countries);

    return (
        <div className="details-page">

            <BackButton />

            <DetailsContainer countryDetails={currentCountry}/>
        
        </div>
            
    )
}

export default DetailsPage;

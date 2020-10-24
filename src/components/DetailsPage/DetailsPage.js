import React from 'react';
import './styles.css';
import BackButton from '../BackButton/BackButton';
import DetailsContainer from '../DetailsContainer/DetailsContainer';

const DetailsPage = () => {

    return (
        <div className="details-page">

            <BackButton />

            <DetailsContainer />
        
        </div>
            
    )
}

export default DetailsPage;

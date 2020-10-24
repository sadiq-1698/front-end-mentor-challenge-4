import React from 'react';

const TopSection = (props) => {

    const countryDetails = props.countryDetails;

    // helper functions
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="top">
            <div className="first">
                <h1>Country</h1>
                <div className="more-details">
                    <h4 >Native Name:<span>&nbsp;{countryDetails.nativeName}</span></h4>
                    <h4 >Population:<span>&nbsp;{numberWithCommas(countryDetails.population)}</span></h4>
                    <h4 >Region:<span>&nbsp;{countryDetails.region}</span></h4>
                    <h4 >Sub Region:<span>&nbsp;{countryDetails.subregion}</span></h4>
                    <h4 >Capital:<span>&nbsp;{countryDetails.capital}</span></h4>
                </div>
            </div>
            <div className="second">
                <TopLevelDomain countryDetails = {countryDetails}/>
                <Currencies countryDetails = {countryDetails}/>
                <Languages countryDetails = {countryDetails}/>
            </div>
        </div>   
    );
}

const TopLevelDomain = (props) => {

    const countryDetails = props.countryDetails;

    return (
        <h4>Top Level Domain:&nbsp;
            {
                countryDetails.topLevelDomain.map((domain, index) => {
                    return <span key={index}>
                     {domain} {index < countryDetails.topLevelDomain.length - 1 ? ", " : ""}
                    </span>
                })
            }
        </h4>
    );
}

const Currencies = (props) => {

    const countryDetails = props.countryDetails;

    return (
        <h4>Currencies:&nbsp;
            {
                countryDetails.currencies.map((currency, index) => {
                    return <span key={index}>
                        {currency.name} {index < countryDetails.currencies.length - 1 ? ", " : ""}
                    </span>
                })
            }
        </h4>
    );
}

const Languages = (props) => {

    const countryDetails = props.countryDetails;

    return (
        <h4>Languages:&nbsp;
            {
                countryDetails.languages.map((language, index) => {
                    return <span key={index}>
                        {language.name} {index < countryDetails.languages.length - 1 ? ", " : ""}
                    </span>
                })
            }
        </h4>
    );
}

export default TopSection;
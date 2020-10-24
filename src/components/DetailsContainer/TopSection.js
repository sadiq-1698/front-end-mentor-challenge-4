import React from 'react';

const TopSection = (props) => {

    const countryDetails = props.countryDetails;

    return (
        <div className="top">
            <div className="first">
                <h1>Country</h1>
                <div className="more-details">
                    <h4 >Native Name:<span>&nbsp;{countryDetails.nativeName}</span></h4>
                    <h4 >Population:<span>&nbsp;{countryDetails.population}</span></h4>
                    <h4 >Region:<span>&nbsp;{countryDetails.region}</span></h4>
                    <h4 >Sub Region:<span>&nbsp;{countryDetails.subregion}</span></h4>
                    <h4 >Capital:<span>&nbsp;{countryDetails.capital}</span></h4>
                </div>
            </div>
            <div className="second">
                <h4>Top Level Domain:&nbsp;
                        {
                            countryDetails.topLevelDomain.map((domain, index) => {
                                return <span key={index}>{domain}</span>
                            })
                        }
                </h4>
                <h4>Currencies:
                    <span>&nbsp;{countryDetails.currencies[0].name}</span>
                </h4>
                <h4>Languages:&nbsp;
                        {
                            countryDetails.languages.map((language, index) => {
                                 return <span key={index}>
                                            {language.name}
                                            {index < countryDetails.languages.length - 1 ? ", " : ""}
                                        </span>
                            })
                        }
                </h4>
            </div>
        </div>   
    );
}

export default TopSection;
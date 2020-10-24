import React, { useContext } from 'react';
import Countries from '../../context/Countries';

const BottomSection = (props) => {

    const countryDetails = props.countryDetails;

    // use context
    const { setCurrentCountry, countryList } = useContext(Countries);

    // helper functions
    function onClickBorderCountries(countryName){
        let findCountry = countryList.filter(function(country) {
            let currentCountryRegion = country.alpha3Code;
            return currentCountryRegion === countryName;
        });
        setCurrentCountry(findCountry[0]);
    }

    return (
        <div className="third">
            <h4>Border Countries:&nbsp;&nbsp;</h4>
            <div className="third-right">
                {
                    countryDetails.borders.map((country, index) => {
                        return  <span key={index} onClick={(e) => onClickBorderCountries(e.target.innerHTML)}>
                                    {country}
                                </span>
                    })
                }     
            </div>
        </div> 
    );
}

export default BottomSection;
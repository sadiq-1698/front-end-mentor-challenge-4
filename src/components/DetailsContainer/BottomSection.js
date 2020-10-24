import React from 'react';

const BottomSection = (props) => {

    const countryDetails = props.countryDetails;

    console.log(countryDetails);

    return (
        <div className="third">
            <h4>Border Countries:&nbsp;&nbsp;</h4>
            <div className="third-right">
                {
                    countryDetails.borders.map((country, index) => {
                        return <span key={index}>{country}</span>
                    })
                }     
            </div>
        </div> 
    );
}

export default BottomSection;
import React from 'react';

const Loader = () => {
    return (
        <img src={process.env.PUBLIC_URL + '/earth-rotate.gif'} alt="earth-rotate" width="50px" height="50px"/>
    );
}

export default Loader;
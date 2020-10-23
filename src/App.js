import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/NavBar/Navbar';
// import MainPage from './components/MainPage/MainPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import ThemeToggle from './context/ThemeToggle';
import Countries from './context/Countries';

function App() {

  const[darkMode, setDarkMode] = useState(false);
  const[countryList, setCountryList] = useState(null);
  const[displayList, setDisplayList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios('https://restcountries.eu/rest/v2/all');
      if(response){
        setCountryList(response.data);
        setDisplayList(response.data);
      }
    };
    fetchData();
  },[]);

  return (
    <div className={darkMode ? "wrapper dark" : "wrapper"}>
      <ThemeToggle.Provider value={{ darkMode, setDarkMode }}>
        <Navbar />
        <Countries.Provider value={{countryList, displayList, setDisplayList}}>
          {/* <MainPage /> */}
          <DetailsPage />
        </Countries.Provider>
      </ThemeToggle.Provider>
    </div>
  );
};


export default App;

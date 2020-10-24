import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import MainPage from './components/MainPage/MainPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import ThemeToggle from './context/ThemeToggle';
import Countries from './context/Countries';
import SwitchPage from './context/SwitchPage';

function App() {

  const[darkMode, setDarkMode] = useState(false);
  const[countryList, setCountryList] = useState(null);
  const[displayList, setDisplayList] = useState(null);
  const[showDetailsPage, setShowDetailsPage] = useState(false);

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
        <SwitchPage.Provider value ={{ showDetailsPage, setShowDetailsPage }}>
          <Countries.Provider value={{countryList, displayList, setDisplayList}}>
            {
              showDetailsPage ? <DetailsPage /> : <MainPage />
            }
          </Countries.Provider>
        </SwitchPage.Provider>
      </ThemeToggle.Provider>
    </div>
  );
};


export default App;

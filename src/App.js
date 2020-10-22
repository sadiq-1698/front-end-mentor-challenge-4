import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import FilterDropdown from './components/FilterDropDown/FilterDropdown';
import Searchbar from './components/SearchBar/Searchbar';
import ThemeToggle from './context/ThemeToggle';
import CardWrapper from './components/CardWrapper/CardWrapper';

function App() {

  const[darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "wrapper dark" : "wrapper"}>
      <ThemeToggle.Provider value={{ darkMode, setDarkMode }}>
        <Navbar />
        <SearchWrapper />
        <CardWrapper />
      </ThemeToggle.Provider>
    </div>
  );
};

const SearchWrapper = () => {
  return (
    <div className="search-wrapper-container">
      <Searchbar />
      <FilterDropdown />
    </div>
  )
};


export default App;

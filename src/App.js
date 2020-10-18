import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import FilterDropdown from './components/FilterDropDown/FilterDropdown';
import Searchbar from './components/SearchBar/Searchbar';

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <SearchWrapper />
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

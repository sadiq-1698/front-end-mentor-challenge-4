import React, { useState } from 'react';
import Searchbar from '../SearchBar/Searchbar';
import FilterDropdown from '../FilterDropDown/FilterDropdown';
import ToggleDropDown from '../../context/ToggleDropDown';

const SearchWrapper = () => {

    const[dropDownOpen, setDropDownOpen] = useState(false);

    return (
      <div className="search-wrapper-container">
        <ToggleDropDown.Provider value={{dropDownOpen, setDropDownOpen}}>
          <Searchbar />
          <FilterDropdown />
        </ToggleDropDown.Provider>
      </div>
    )
};

export default SearchWrapper;
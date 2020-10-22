import React from 'react';
import Searchbar from '../SearchBar/Searchbar';
import FilterDropdown from '../FilterDropDown/FilterDropdown';

const SearchWrapper = () => {
    return (
      <div className="search-wrapper-container">
        <Searchbar />
        <FilterDropdown />
      </div>
    )
};

export default SearchWrapper;
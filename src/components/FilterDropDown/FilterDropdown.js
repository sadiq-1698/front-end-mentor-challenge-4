import React, { useContext } from 'react';
import './styles.css';
import ThemeToggle from '../../context/ThemeToggle';
import ToggleDropDown from '../../context/ToggleDropDown';
import DropDownList from './DropDownList';

const FilterDropdown = () => {

    // use context
    const { darkMode } = useContext(ThemeToggle);
    const { setDropDownOpen } = useContext(ToggleDropDown);

    // helper functions
    const onClickDropDown = () => {
        setDropDownOpen((prevState) => !prevState);
    }

    return (
        <>
            <div className="filter-dropdown" >
                <div className={darkMode ? "content-container dark" : "content-container"} onClick={onClickDropDown}>
                    <span className={ darkMode ? "dark" : null }>
                        Filter by Region
                    </span>
                    <div className="dropdown-icon-container">
                        <i className={darkMode ? "fa fa-angle-down dark" : "fa fa-angle-down"} aria-hidden="true"></i>
                    </div>
                    <DropDownList />
                </div>
            </div>
        </>
    );

}

export default FilterDropdown;

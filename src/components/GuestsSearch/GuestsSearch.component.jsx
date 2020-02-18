import React, {useContext, useRef} from 'react';
import './GuestsSearch.styles.css';
import {GuestContext} from '../../context/guestContext/guestContext';

const GuestsSearch = () => {
  const {searchGuest, clearSearch} = useContext(GuestContext);
  const searchValue = useRef('');
  const handleChange = e => {
    if (searchValue.current.value !== '') {
      searchGuest(e.target.value);
    } else {
      clearSearch();
    }
  };
  return (
    <div>
      <div className="search-section max-w-md">
        <input
          className="bg-white placeholder-gray-400  appearance-none shadow border border-gray-100 rounded-full w-full px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-100"
          type="text"
          placeholder="search guest... "
          onChange={e => {
            handleChange(e);
          }}
        />
      </div>
    </div>
  );
};

export default GuestsSearch;

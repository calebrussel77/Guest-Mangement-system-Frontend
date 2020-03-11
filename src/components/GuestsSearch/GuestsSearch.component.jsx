import React, {useRef} from 'react';
import './GuestsSearch.styles.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const GuestsSearch = props => {
  const searchValue = useRef('');

  const handleChange = e => {
    if (searchValue.current.value !== '') {
      props.onSearchGuest(e.target.value);
    } else {
      props.onClearSearch();
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

const mapDispatchToProps = dispatch => {
  return {
    onSearchGuest: guest => dispatch(actions.searchGuest(guest)),
    onClearSearch: () => dispatch(actions.clearSearch()),
  };
};
export default connect(null, mapDispatchToProps)(GuestsSearch);

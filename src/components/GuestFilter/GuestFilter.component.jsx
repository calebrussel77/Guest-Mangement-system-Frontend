import React from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

const GuestFilter = props => {
  return (
    <div className="toggle-section pr-64 pt-4">
      <div className="flex items-center justify-center w-full mb-24">
        <label htmlFor="toogleA" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toogleA"
              type="checkbox"
              className="hidden"
              onChange={() => {
                props.onToggleFilter();
              }}
            />
            <div className="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="toggle__dot absolute w-4 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
          </div>
          <div className="ml-3 text-gray-600 font-light text-md">
            Show Attending only
          </div>
        </label>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleFilter: () => dispatch(actions.toggleFilter()),
  };
};

export default connect(null, mapDispatchToProps)(GuestFilter);

import React from 'react';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

const Guest = props => {
  const guest = props.guest;

  const handleRemove = guestID => {
    props.onRemoveGuest(guestID);
  };
  return (
    <div className="max-w-xs m-2 ">
      <div className="h-8 w-full bg-gray-300 flex justify-between">
        <p className="text-gray-500 text-sm cursor-pointer">
          {guest.isConfirmed ? 'Confirmed' : 'not-confirmed'}
        </p>
        <div
          className="text-green-500 text-sm cursor-pointer"
          onClick={() => {
            props.onEditGuest(guest);
          }}
        >
          edit
        </div>
        <div
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => {
            handleRemove(guest._id);
          }}
        >
          delete
        </div>
      </div>
      <div className="body bg-gray-100 border-t-2 border-teal-500 h-24 ">
        {guest.dietary === 'non-veg' ? (
          <button className="align-baseline text-center mx-2 bg-gray-600 focus:outline-none focus:shadow-outline hover:bg-gray-400 px-4 rounded shadow text-sm text-white">
            {guest.dietary}
          </button>
        ) : guest.dietary === 'vegetale' ? (
          <button className="align-baseline text-center  mx-2 bg-green-600 focus:outline-none focus:shadow-outline hover:bg-green-400 px-4 rounded shadow text-sm text-white">
            {guest.dietary}
          </button>
        ) : (
          <button className="align-baseline text-center  mx-2 bg-yellow-600 focus:outline-none focus:shadow-outline hover:bg-yellow-400 px-4 rounded shadow text-sm text-white">
            {guest.dietary}
          </button>
        )}
        <div className="text-sm pl-32 pt-2">{guest.name}</div>
        <div className="text-sm pl-32 p-0 m-0">{guest.phone}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveGuest: guestId => dispatch(actions.moveGuest(guestId)),
    onEditGuest: guest => dispatch(actions.editGuest(guest)),
  };
};
export default connect(null, mapDispatchToProps)(Guest);

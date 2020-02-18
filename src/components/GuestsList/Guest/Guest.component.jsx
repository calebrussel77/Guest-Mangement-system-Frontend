import React, {useContext} from 'react';
import {GuestContext} from '../../../context/guestContext/guestContext';

const Guest = props => {
  const guest = props.guest;
  const {removeGuest, updateGuest, editGuest} = useContext(GuestContext);

  const handleRemove = guestID => {
    removeGuest(guestID);
  };

  const handleIsConfirmed = () => {
    updateGuest({...guest, isConfirmed: !guest.isConfirmed});
  };

  return (
    <div className="max-w-xs m-2 " key={guest.id}>
      <div className="h-8 w-full bg-gray-300 flex justify-between">
        <p
          className="text-gray-500 text-sm cursor-pointer"
          onClick={() => {
            handleIsConfirmed();
          }}
        >
          {guest.isConfirmed ? 'Confirmed' : 'not-confirmed'}
        </p>
        <div
          className="text-green-500 text-sm cursor-pointer"
          onClick={() => {
            editGuest(guest);
          }}
        >
          edit
        </div>
        <div
          className="text-red-500 text-sm cursor-pointer"
          onClick={() => {
            handleRemove(guest.id);
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

export default Guest;

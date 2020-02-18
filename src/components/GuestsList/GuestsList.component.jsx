import React, {useContext} from 'react';
import Guest from './Guest/Guest.component';
import {GuestContext} from '../../context/guestContext/guestContext';

const GuestsList = () => {
  const {guests, filteredGuest, search} = useContext(GuestContext);

  return guests.length ? (
    <div className="border-t-4 border-gray-400 overflow-y-auto h-64 px-8">
      {search !== null
        ? search.map(guest => {
            return <Guest guest={guest} key={guest.id} />;
          })
        : guests
            .filter(guest => {
              return !filteredGuest || guest.isConfirmed;
            })
            .map(guest => {
              return <Guest guest={guest} key={guest.id} />;
            })}
    </div>
  ) : (
    <div className="empty">No Guests Found now...</div>
  );
};

export default GuestsList;

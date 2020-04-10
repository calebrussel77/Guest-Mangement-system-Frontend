import React, {useEffect} from 'react';
import Guest from './Guest/Guest';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../UI/Spinner/Spinner';

const GuestsList = props => {
  useEffect(() => {
    props.onGetAllGuest();
    //eslint-disable-next-line
  }, []);

  return props.guests.length ? (
    <div className="border-t-4 border-gray-400 overflow-y-auto h-64">
      {props.search !== null
        ? props.search.map(guest => {
            return <Guest key={guest._id} guest={guest} />;
          })
        : props.guests
            .filter(guest => {
              //filtered is false then when is true the 2nd condition is not display thenwe have allthe guests
              //when it's false filter check the 2nd condition and thendiaplay the true condition
              return !props.filteredGuest || guest.isConfirmed;
            })
            .map(guest => {
              return <Guest key={guest._id} guest={guest} />;
            })}
    </div>
  ) : (
    <div className="text-2xl font-bold text-gray-900 text-center">
      {props.isLoading ? <Spinner /> : null}
      No Guests Found now...
    </div>
  );
};

const mapStateToProps = state => {
  return {
    search: state.guests.search,
    guests: state.guests.guests,
    filteredGuest: state.guests.filteredGuest,
    error: state.guests.error,
    isLoading: state.guests.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllGuest: () => dispatch(actions.initGuests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestsList);

import React from 'react';
import {connect} from 'react-redux';

const GuestsCounter = props => {
  const totalInvited = props.guests.length;
  const attendingGuest = props.guests.filter(guest => {
    return guest.isConfirmed;
  });
  const totalAttending = attendingGuest.length;
  const attendingByDietary = type => {
    return props.guests.filter(guest => {
      return guest.dietary === type;
    }).length;
  };
  const invitedByDietary = type => {
    return props.guests.filter(guest => {
      return guest.dietary === type;
    }).length;
  };
  return (
    <div className="bg-white max-w-md shadow-xl">
      <table className="table-fixed max-w-md bg-gray-200">
        <thead>
          <tr className="bg-white border-b-4 border-teal-600">
            <th className="w-1/2 px-4 py-2">Guests</th>
            <th className="w-1/4 px-4 py-2">Invited</th>
            <th className="w-1/4 px-4 py-2">Attended</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Non-Veg</td>
            <td className="border px-4 py-2">{invitedByDietary('Non-Veg')}</td>
            <td className="border px-4 py-2">
              {attendingByDietary('Non-Veg')}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Vegan</td>
            <td className="border px-4 py-2">{invitedByDietary('Vegan')}</td>
            <td className="border px-4 py-2">{attendingByDietary('Vegan')}</td>
          </tr>
          <tr className="bg-teal-100">
            <td className="border px-4 py-2">Pescetarians</td>
            <td className="border px-4 py-2">
              {invitedByDietary('Pescetarians')}
            </td>
            <td className="border px-4 py-2">
              {attendingByDietary('Pescetarians')}
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Total</td>
            <td className="border px-4 py-2">{totalInvited}</td>
            <td className="border px-4 py-2">{totalAttending}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    guests: state.guests.guests,
  };
};
export default connect(mapStateToProps)(GuestsCounter);

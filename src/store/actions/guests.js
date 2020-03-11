import axiosInstance from '../../utils/axiosInstance';
import * as actionTypes from './actionTypes';

export const guestStart = () => {
  return {
    type: actionTypes.GUEST_START,
  };
};

export const errorGuests = () => {
  return {
    type: actionTypes.ERROR_GUESTS,
  };
};

//Get All Guests
export const getGuests = guests => {
  return {
    type: actionTypes.GET_GUESTS,
    guests: guests,
  };
};

export const initGuests = () => {
  return dispatch => {
    dispatch(guestStart());
    axiosInstance
      .get('/guests')
      .then(resp => {
        dispatch(getGuests(resp.data.guests));
      })
      .catch(err => {
        dispatch(errorGuests());
      });
  };
};
//

//Add guest
export const addGuest = (msg, guest) => {
  return {
    type: actionTypes.ADD_GUEST,
    msg: msg,
    guest: guest,
  };
};
export const addingNewGuest = guest => {
  return dispatch => {
    dispatch(guestStart());
    axiosInstance
      .post(`/guests`, guest)
      .then(resp => {
        dispatch(addGuest(resp.data.msg, resp.data.guest));
      })
      .catch(err => {
        dispatch(errorGuests());
      });
  };
};
//

//Toggle Filter
export const toggleFilter = () => {
  return {
    type: actionTypes.TOGGLE_FILTER,
  };
};
//

//Remove Guest
export const removeGuest = (id, msg) => {
  return {
    type: actionTypes.REMOVE_GUEST,
    id: id,
    msg: msg,
  };
};
export const moveGuest = guestId => {
  return dispatch => {
    dispatch(guestStart());
    axiosInstance
      .delete(`/guests/${guestId}`)
      .then(resp => {
        dispatch(removeGuest(guestId, resp.data.msg));
      })
      .catch(err => {
        dispatch(errorGuests());
      });
  };
};
//

//Update Guests
export const updateGuest = (guest, msg) => {
  return {
    type: actionTypes.UPDATE_GUEST,
    guest: guest,
    msg: msg,
  };
};
export const setGuest = guest => {
  return dispatch => {
    dispatch(guestStart());
    axiosInstance
      .put(`/guests/${guest._id}`, guest)
      .then(resp => {
        dispatch(updateGuest(guest, resp.data.msg));
      })
      .catch(err => {
        dispatch(errorGuests());
      });
  };
};
//

export const searchGuest = guest => {
  return {
    type: actionTypes.SEARCH_GUEST,
    guest: guest,
  };
};

export const clearSearch = () => {
  return {
    type: actionTypes.CLEAR_SEARCH,
  };
};

export const editGuest = guest => {
  return {
    type: actionTypes.EDIT_GUEST,
    guest: guest,
  };
};

export const clearEdit = () => {
  return {
    type: actionTypes.CLEAR_EDIT,
  };
};

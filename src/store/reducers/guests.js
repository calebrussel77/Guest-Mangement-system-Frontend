import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utils/updateObject';

const initialState = {
  filteredGuest: false,
  search: null,
  editAble: null,
  guests: [],
  error: false,
  msg: null,
  isLoading: false,
};

const guestReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GUESTS:
      return updateObject(state, {
        guests: action.guests,
        error: false,
        isLoading: false,
      });

    case actionTypes.ADD_GUEST:
      return updateObject(state, {
        msg: action.msg,
        guests: [...state.guests, action.guest],
      });

    case actionTypes.RESET_GUESTS:
      return updateObject(state, {guests: []});

    case actionTypes.ERROR_GUESTS:
      return updateObject(state, {
        error: true,
        msg: null,
        isLoading: false,
      });

    case actionTypes.GUEST_START:
      return updateObject(state, {
        isLoading: true,
      });

    case actionTypes.EDIT_GUEST:
      return updateObject(state, {
        editAble: action.guest,
      });

    case actionTypes.TOGGLE_FILTER:
      return updateObject(state, {filteredGuest: !state.filteredGuest});

    case actionTypes.REMOVE_GUEST:
      return updateObject(state, {
        msg: action.msg,
        guests: state.guests.filter(guest => {
          console.log(action.id, guest._id);
          return guest._id !== action.id;
        }),
      });

    case actionTypes.CLEAR_EDIT:
      return updateObject(state, {editAble: null});

    case actionTypes.SEARCH_GUEST:
      const reg = new RegExp(`${action.guest}`, 'gi');
      return updateObject(state, {
        search: state.guests.filter(guest => {
          return guest.name.match(reg);
        }),
      });

    case actionTypes.UPDATE_GUEST:
      return updateObject(state, {
        msg: action.msg,
        guests: state.guests.map(guest =>
          guest._id === action.guest._id ? action.guest : guest
        ),
      });

    case actionTypes.CLEAR_SEARCH:
      return updateObject(state, {
        search: null,
      });
    default:
      return state;
  }
};

export default guestReducer;

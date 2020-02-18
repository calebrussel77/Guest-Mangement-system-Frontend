import React, {createContext, useReducer} from 'react';
import guestReducer from './guestReducer';

export const GuestContext = createContext([]);

const GuestContextProvider = props => {
  const initialState = {
    filteredGuest: false,
    search: null,
    editAble: null,
    guests: [
      {
        id: 1,
        name: 'jake smith',
        dietary: 'Vegan',
        isConfirmed: true,
        phone: 5537772,
      },
      {
        id: 2,
        name: 'adams cleb',
        dietary: 'Non-Veg',
        isConfirmed: false,
        phone: 122377373,
      },
      {
        id: 3,
        name: 'junior smith',
        dietary: 'Vegan',
        isConfirmed: false,
        phone: 80000089,
      },
      {
        id: 4,
        name: 'clarence smith',
        dietary: 'Non-Veg',
        isConfirmed: true,
        phone: 12872997,
      },
      {
        id: 5,
        name: 'sebastien smith',
        dietary: 'Pescetarians',
        phone: 122333,
        isConfirmed: true,
      },
    ],
  };
  const [state, dispatch] = useReducer(guestReducer, initialState);

  const toggleGuest = () => {
    dispatch({
      type: 'TOGGLE_FILTER',
      filterGuest: !state.filteredGuest,
    });
  };
  const removeGuest = guestId => {
    dispatch({
      type: 'REMOVE_GUEST',
      id: guestId,
    });
  };

  const addGuest = guest => {
    dispatch({
      type: 'ADD_GUEST',
      guest: guest,
    });
  };

  const searchGuest = guest => {
    dispatch({
      type: 'SEARCH_GUEST',
      guest: guest,
    });
  };

  const clearSearch = () => {
    dispatch({
      type: 'CLEAR_SEARCH',
    });
  };

  const updateGuest = guest => {
    dispatch({
      type: 'UPDATE_GUEST',
      guest: guest,
    });
  };

  const editGuest = guest => {
    dispatch({
      type: 'EDIT_GUEST',
      guest: guest,
    });
  };

  const clearEdit = () => {
    dispatch({
      type: 'CLEAR_EDIT',
    });
  };
  return (
    <GuestContext.Provider
      value={{
        ...state,
        dispatch,
        toggleGuest,
        clearSearch,
        searchGuest,
        addGuest,
        removeGuest,
        updateGuest,
        editGuest,
        clearEdit,
      }}
    >
      {props.children}
    </GuestContext.Provider>
  );
};

export default GuestContextProvider;

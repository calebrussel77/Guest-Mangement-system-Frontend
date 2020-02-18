const GuestReducer = (state, action) => {
  const generatedId = () => {
    return Math.random() * 8;
  };

  switch (action.type) {
    case 'ADD_GUEST':
      return {
        ...state,
        guests: [
          ...state.guests,
          {
            name: action.guest.name,
            phone: action.guest.phone,
            isConfirmed: false,
            dietary: action.guest.dietary,
            id: generatedId,
          },
        ],
      };

    case 'UPDATE_GUEST':
      return {
        ...state,
        guests: state.guests.map(guest =>
          guest.id === action.guest.id ? action.guest : guest
        ),
      };

    case 'REMOVE_GUEST':
      return {
        ...state,
        guests: [
          ...state.guests.filter(guest => {
            return guest.id !== action.id;
          }),
        ],
      };

    case 'EDIT_GUEST':
      return {
        ...state,
        editAble: action.guest,
      };

    case 'CLEAR_EDIT':
      return {
        ...state,
        editAble: null,
      };

    case 'TOGGLE_FILTER':
      return {
        ...state,
        filteredGuest: !state.filteredGuest,
      };
    case 'SEARCH_GUEST':
      const reg = new RegExp(`${action.guest}`, 'gi');
      return {
        ...state,
        search: state.guests.filter(guest => {
          return guest.name.match(reg);
        }),
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        search: null,
      };

    default:
      return state;
  }
};

export default GuestReducer;

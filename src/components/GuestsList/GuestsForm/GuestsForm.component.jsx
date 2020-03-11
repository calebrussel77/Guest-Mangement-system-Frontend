import React, {useState, useEffect} from 'react';
import './GuestForm.styles.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

const GuestsForm = props => {
  useEffect(() => {
    if (props.editAble !== null) {
      props.onEditGuest(props.editAble);
      setGuest({
        name: props.editAble.name,
        phone: props.editAble.phone,
        dietary: props.editAble.dietary,
      });
    } else {
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg',
      });
    }
    //eslint-disable-next-line
  }, [props.editAble]);

  const [guest, setGuest] = useState({
    _id: null,
    name: '',
    phone: '',
    dietary: 'Non-Veg',
  });

  const handleChange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
      _id: props.editAble !== null ? props.editAble._id : null,
    });
  };

  const cancelEdit = () => {
    props.onClearEdit();
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(guest);
    if (props.editAble !== null) {
      props.onSetGuest(guest);
      props.onClearEdit();
    } else {
      props.onAddingNewGuest(guest);
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg',
      });
    }
  };

  return (
    <div className="max-w-sm">
      <form
        className="bg-white shadow-md rounded px-8 py-8 rounded"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-teal-500">
          {props.editAble !== null ? 'EDIT GUEST' : 'INVITE SOMEONE'}
        </h3>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-bold mb-2 text-sm"
            htmlFor="username"
          >
            name
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="inline-username"
            name="name"
            value={guest.name}
            type="text"
            placeholder="Name"
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-600 font-bold text-sm mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="phone"
            name="phone"
            value={guest.phone}
            type="text"
            placeholder="phone number"
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <div className="text-sm text-teal-500">Dietary</div>
          <div>
            <div className="mx-auto flex justify-between">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio2"
                  type="radio"
                  name="dietary"
                  value="Pescetarians"
                  checked={guest.dietary === 'Pescetarians'}
                  className="hidden"
                  onChange={e => handleChange(e)}
                />
                <label
                  htmlFor="radio2"
                  className="flex items-center text-sm cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  Pescetarians
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio3"
                  type="radio"
                  name="dietary"
                  value="Vegan"
                  checked={guest.dietary === 'Vegan'}
                  className="hidden"
                  onChange={e => handleChange(e)}
                />
                <label
                  htmlFor="radio3"
                  className="flex text-sm items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  Vegan{' '}
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="radio4"
                  type="radio"
                  name="dietary"
                  value="Non-Veg"
                  className="hidden"
                  checked={guest.dietary === 'Non-Veg'}
                  onChange={e => handleChange(e)}
                />
                <label
                  htmlFor="radio4"
                  className="flex items-center text-sm cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey"></span>
                  NonVeg
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 flex justify-between ">
          <button
            className="shadow bg-teal-500 text-sm hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold px-2 rounded"
            type="submit"
          >
            {props.editAble !== null ? 'Update Guest' : 'Add Guest'}
          </button>
          {props.editAble !== null ? (
            <input
              type="button"
              value="Cancel"
              onClick={cancelEdit}
              className="shadow bg-gray-500 text-sm hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold px-2 rounded"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editAble: state.guests.editAble,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddingNewGuest: guest => dispatch(actions.addingNewGuest(guest)),
    onEditGuest: guest => dispatch(actions.editGuest(guest)),
    onClearEdit: () => dispatch(actions.clearEdit()),
    onSetGuest: guest => dispatch(actions.setGuest(guest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuestsForm);

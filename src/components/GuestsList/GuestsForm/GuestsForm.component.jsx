import React, {useState, useContext, useEffect} from 'react';
import './GuestForm.styles.css';
import {GuestContext} from '../../../context/guestContext/guestContext';

export default function GuestsForm() {
  const {addGuest, editAble, updateGuest, clearEdit} = useContext(GuestContext);

  useEffect(() => {
    if (editAble !== null) {
      setGuest(editAble);
    } else {
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg',
      });
    }
  }, [editAble]);

  const [guest, setGuest] = useState({
    name: '',
    phone: '',
    dietary: 'Non-Veg',
  });

  const handleChange = e => {
    setGuest({
      ...guest,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (editAble !== null) {
      updateGuest(guest);
      clearEdit();
    } else {
      addGuest(guest);
      setGuest({
        name: '',
        phone: '',
        dietary: 'Non-Veg',
      });
    }
  };

  return (
    <div className="w-full max-w-md">
      <form
        className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 rounded"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-teal-500">
          {editAble !== null ? 'EDIT GUEST' : 'INVITE SOMEONE'}
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
            {editAble !== null ? 'Update Guest' : 'Add Guest'}
          </button>
          {editAble !== null ? (
            <input
              type="button"
              value="Cancel"
              onClick={clearEdit}
              className="shadow bg-gray-500 text-sm hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold px-2 rounded"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}

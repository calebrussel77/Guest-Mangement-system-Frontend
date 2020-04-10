import React from 'react';
import GuestsSearch from '../../components/GuestsSearch/GuestsSearch';
import GuestsForm from '../../components/GuestsList/GuestsForm/GuestsForm';
import GuestsCounter from '../../components/GuestsList/GuestsCounter/GuestsCounter';
import GuestsList from '../../components/GuestsList/GuestsList';
import GuestFilter from '../../components/GuestFilter/GuestFilter';

const Home = () => {
  return (
    <div className="flex justify-center items-center my-8 ">
      <div className="main-center">
        <GuestsSearch />
        <GuestFilter />
        <GuestsList />
      </div>
      <div>
        <GuestsForm />
      </div>
      <div>
        <GuestsCounter />
      </div>
    </div>
  );
};

export default Home;
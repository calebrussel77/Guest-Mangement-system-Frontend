import React from 'react';
import GuestsSearch from '../../GuestsSearch/GuestsSearch.component';
import GuestsForm from '../../GuestsList/GuestsForm/GuestsForm.component';
import GuestsCounter from '../../GuestsList/GuestsCounter/GuestsCounter.component';
import GuestsList from '../../GuestsList/GuestsList.component';
import GuestFilter from '../../GuestFilter/GuestFilter.component';

export const Home = () => {
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

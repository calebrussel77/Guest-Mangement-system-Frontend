import React from 'react';
import './assets/styles/app.css';
import Navbar from './components/layouts/Navbar/Navbar.component';
import {Home} from './components/Pages/Home/Home.component';
import GuestContextProvider from "./context/guestContext/guestContext";

function App () {
  return (
      <GuestContextProvider>
          <div className="App">
              <Navbar />
              <div className="m-4">
                  <Home />
              </div>
          </div>
      </GuestContextProvider>
    );
}

export default App;

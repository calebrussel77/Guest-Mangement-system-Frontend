import React from 'react';
import './assets/styles/app.css';
import Navbar from './components/layouts/Navbar/Navbar.component';
import {Home} from './components/Pages/Home/Home.component';
import GuestContextProvider from './context/guestContext/guestContext';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SingIn from './components/Pages/SignIn/SingIn.component';
import Register from './components/Pages/Register/Register.component';
import AuthContextProvider from './context/authContext/authContext';

function App() {
  return (
    <AuthContextProvider>
      <GuestContextProvider>
        <Router>
          <div className="App">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={SingIn} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </GuestContextProvider>
    </AuthContextProvider>
  );
}

export default App;

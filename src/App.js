import React, {useEffect} from 'react';
import './assets/styles/app.css';
import Navbar from './components/layouts/Navbar/Navbar.component';
import {Home} from './components/Pages/Home/Home.component';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import SingIn from './components/Pages/SignIn/SingIn.component';
import Register from './components/Pages/Register/Register.component';
import Logout from './components/Logout/Logout';
import * as actions from './store/actions/index';
import {connect} from 'react-redux';

const App = props => {
  useEffect(() => {
    props.onCheckSignIn();
  });
  let routes = (
    <Switch>
      <Route exact path="/login" component={SingIn} />
      <Route exact path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App font-sans">
      <Navbar />
      {routes}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onCheckSignIn: () => dispatch(actions.authCheckStatus()),
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

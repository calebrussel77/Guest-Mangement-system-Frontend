import React, {useEffect} from 'react';
import './assets/styles/app.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Logout from './components/Logout/Logout';
import * as actions from './store/actions/index';
import {connect} from 'react-redux';
import Layout from "./hoc/layouts/Layout";
import Home from "./containers/Home/Home";
import SingIn from "./containers/SignIn/SingIn";
import Register from "./containers/Register/Register";

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
      <Layout>
          {routes}
      </Layout>
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

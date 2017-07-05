import * as React from 'react';
import './App.css';

import {addAgeAsync} from './index';
import * as ReactRedux from 'react-redux';

const logo = require('./logo.svg');

interface AppProps {
  age: number;
}

const App: React.SFC<AppProps & ReactRedux.DispatchProp<{}>> = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        나이가 {props.age}
        <button onClick={() => props.dispatch(addAgeAsync())}>한해가 지났다.</button>
      </p>
    </div>
  );
};

const { connect } = ReactRedux;

const mapStateToProps = (state: { age: number; }) => {
  return {
    age: state.age
  };
};

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;

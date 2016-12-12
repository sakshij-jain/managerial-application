import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import AddEmployeeContainer from './components/AddEmployeeContainer';
import LoginContainer from './components/LoginContainer';

class App extends React.Component{
  render() {

    const store = createStore(reducers, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

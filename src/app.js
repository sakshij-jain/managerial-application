import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux';

import reducers from './reducers';
import AddEmployeeContainer from './components/AddEmployeeContainer';
import LoginContainer from './components/LoginContainer';
import EmployeeContainer from './components/EmployeeContainer';

const middleware = routerMiddleware(browserHistory);
const store = createStore(reducers, applyMiddleware(middleware, thunk));
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component{
  render() {
    return (
      <div className="container">
        <h1>Managerial Application</h1>
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={LoginContainer} />
            <Route path="login" component = {LoginContainer} />
            <Route path="addemp" component = {AddEmployeeContainer} />
            <Route path="emp" component = {EmployeeContainer} />
          </Router>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'))

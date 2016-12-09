import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import AddEmployee from './components/AddEmployee';

class App extends React.Component{
  render() {

    const store = createStore(reducers, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <AddEmployee />
      </Provider>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

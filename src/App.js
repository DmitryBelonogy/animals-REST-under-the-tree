import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './redusers';
import MainPage from './conponents/MainPage/MainPage'

const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <MainPage /> 
        </div>
      </Provider>      
    );
  }
}

export default App;

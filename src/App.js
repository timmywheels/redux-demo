import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import reducers from './combineReducers';
import Car from "./components/Car";

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className={"App"}>redux-demo</div>
            <Car/>
        </Provider>
    )
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'
import App from './containers/App';


const Root = (
   <Provider store={store}>
      <App/>
   </Provider>
)

ReactDOM.render(Root, document.querySelector("#root"));

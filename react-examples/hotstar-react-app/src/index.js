import React from 'react';  // core react package -- components 
import ReactDOM from 'react-dom'; // rendering the comp in DOM 
import 'bootstrap/dist/css/bootstrap.min.css'; // integrating bootstrap js
import './index.scss'; // custom import of global css

import 'bootstrap/dist/js/bootstrap.bundle.min'; // integrating bootstrap js

import App from './App'; // custom import of AppComponent
import reportWebVitals from './reportWebVitals'; // 
import Context from './context/Context';

// ReactDOM is rendering App Component into an element with an id root.
ReactDOM.render(
  <Context>
    <App />
  </Context>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

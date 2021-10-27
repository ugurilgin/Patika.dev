import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { TodoLayer } from './context/TodoContext';
import {reducer,initialState} from './context/reducer';

ReactDOM.render(
  <React.StrictMode>
    <TodoLayer initialState={initialState} reducer={reducer}>
    <App />
    </TodoLayer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello';
//import Clock from './Clock';
import Clock2 from './Clock';
//import Props from './Props';
//import State from './State'

import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello />, document.getElementById('root'));
//ReactDOM.render(<Clock />, document.getElementById('root'));
//ReactDOM.render(<Props attr="p" attr1="VALUE1" attr2="VALUE2" attr3="VALUE3"/>, document.getElementById('root'));
ReactDOM.render(<Clock2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

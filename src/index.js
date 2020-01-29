import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
// import TasksPage from './components/TasksPage';
import * as serviceWorker from './serviceWorker';
import UpdateTasksPage from './components/UpdateTasksPage'

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<TasksPage />, document.getElementById('root'));
ReactDOM.render(<UpdateTasksPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

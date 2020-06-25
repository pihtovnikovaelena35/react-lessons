import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount:12 },
  {id: 2, message: 'It is my first post', likesCount:125 }
];

let dialogs = [
  {id: 1, name: 'Sasha'},
  {id: 2, name: 'Sveta'},
  {id: 3, name: 'Masha'},
  {id: 4, name: 'Olga'},
  {id: 5, name: 'Nikita'},
 ];

let messages = [
 {id: 1, message:'Hi'},
 {id: 2, message:'How are you?'},
 {id: 3, message:'Hi'},
 {id: 4, message:'Hi'},
 {id: 5, message:'Hi'},
];

ReactDOM.render(
  <React.StrictMode>
    <App  posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

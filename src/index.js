import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAz3QpTrYZR0lWtqAzRzjbA01grcdSgw8A",
  authDomain: "qrcode-239f0.firebaseapp.com",
  databaseURL: "https://qrcode-239f0.firebaseio.com",
  projectId: "qrcode-239f0",
  storageBucket: "qrcode-239f0.appspot.com",
  messagingSenderId: "1002112074455"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App/ >,
  document.getElementById('root')
);

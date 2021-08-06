/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import jwt from 'jsonwebtoken'
import 'antd/dist/antd.css'
import store from "./store";
import App from './App';
import { getToken } from "./utils/localStorageHandler";
import * as type from './const/ActionTypes'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



var token = getToken();
if (token) {
  //  console.log(token);
   const data =jwt.decode(token)
  const now = new Date().getTime() / 1000;
  //  console.log('data',data);  
    if(data.exp > now){
      store.dispatch({
        type: type.LOGGIN_SUCCESS,
        payload: { token, username: data.username }
      })
    }
  //  window.location="/login"
  }

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <ToastContainer style={{ marginTop: 50 }} />
  </Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

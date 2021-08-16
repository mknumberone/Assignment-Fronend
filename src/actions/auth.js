/* eslint-disable no-unused-expressions */
/* eslint-  disable no-undef */
import {adminApi } from "../apis"
import * as type from "../const/ActionTypes";
import { saveToken } from "../utils/localStorageHandler";

export const checkChangePass = (payload) => {
  return {
    type: type.CHECK_CHANGE_PASS,
    payload,
  };
};

export const login = (data)=> (dispatch)=>{
    adminApi.login(data)
    .then((resp)=>{
        dispatch({
            type:type.LOGGIN_SUCCESS,
            payload: { token: resp.data.accessToken},
        })
        saveToken(resp.data.accessToken)

    })
    .catch((err)=>{
        console.log('err',err);
        // Dispath to store
        dispatch({ type: type.LOGGIN_FAILED })
    })
}
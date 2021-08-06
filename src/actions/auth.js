/* eslint-disable no-unused-expressions */
/* eslint-  disable no-undef */
import {adminApi } from "../apis"
import * as type from "../const/ActionTypes";
import { saveToken } from "../utils/localStorageHandler";
// import store from '../store/index'


export const login = (data)=> (dispatch)=>{
    adminApi.login(data)
    .then((resp)=>{
        console.log("resp",resp);
        // dispatch to store
        dispatch({
            type:type.LOGGIN_SUCCESS,
            payload: { token: resp.data.accessToken},
        })
        saveToken(resp.data.accessToken)
        // window.location ="/"
    })
    .catch((err)=>{
        console.log('err',err);
        // Dispath to store
        dispatch({ type: type.LOGGIN_FAILED })
    })
}
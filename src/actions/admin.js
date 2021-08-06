/* eslint-disable no-unused-expressions */
/* eslint-  disable no-undef */
import { adminApi } from "../apis"
import * as type from "../const/ActionTypes";



export const fetchAdmins = (data) => (dispatch) => {
    dispatch({ type: type.FETCH_USERS })
    adminApi.fetchAdmins(data)
        .then((resp) => {
            // console.log("resp", resp);
            // dispatch to store
            dispatch({
                type: type.FETCH_USERS_SUCCESS,
                payload: { users: resp.data }
            })
        })
        .catch((err) => {
            // console.log('err', err);
            // Dispath to store
            dispatch({
                type: type.FETCH_USERS_FAILED,
            })
        })
}


export const addAdmin = (data) => (dispatch) => {
    dispatch({ type: type.ADD_USER })
    // console.log("data", data , dispatch)
    adminApi.addadmin(data)
        .then((resp) => {
            // console.log("resp: ", resp);
            dispatch({
                type: type.ADD_USER_SUCCESS,
                payload: {
                    data: resp.data,
                    message: "Add Admin Success!"
                },
            });
        })
        .catch((err) => {
            // console.log("err: ", err.response);
            let message = "Add Admin Failed!"
            if (err.response && err.response.statusText) {
                message = err.response.data.statusText
            }
            dispatch({
                type: type.ADD_USER_FAILED,
                payload: {
                    message,
                },
            });
        });
}

export const getAdminID = (id) => (dispatch) => {
    dispatch({ type: type.GET_USER })
    // console.log("Dispath Get",dispatch);
    adminApi
        .getadminid(id)
        .then((resp) => {
            // console.log(resp);
            if (resp.data && resp.data.success) {
                dispatch({
                    type: type.GET_USER_SUCCESS,
                    payload: {
                        user: resp.data,
                    },
                });
            } else {
                dispatch({
                    type: type.GET_USER_FAILED,
                    payload: {
                        message: "Something went wrong!",
                    },
                });
            }
        })
        .catch((err) => {
            // console.log("err: ", err.response);
            let message = "Add user failed";
            if (err.response && err.response.statusText) {
                message = err.response.statusText;
            }
            dispatch({
                type: type.GET_USER_FAILED,
                payload: {
                    message,
                },
            });
        });
}

export const delAdminID = (id) => (dispatch) => {
    dispatch({ type: type.DELETE_USER })
    console.log("id", id)
    adminApi
        .deleteadmin(id)

        .then((resp) => {
            console.log("resp", resp);
            if (resp.data) {
                console.log('success')
                dispatch({
                    type: type.DELETE_USER_SUCCESS,
                    payload: {
                        message: "Delete success",
                        user: resp.data,
                    },
                });
            } else {
                console.log("error")
                dispatch({
                    type: type.DELETE_USER_FAILED,
                    payload: {
                        message: "Something went wrong!",
                    },
                });
            }
        })
        .catch((err) => {
            // console.log("err: ", err.response);
            let message = "Add user failed";
            if (err.response && err.response.statusText) {
                message = err.response.statusText;
            }
            dispatch({
                type: type.DELETE_USER_FAILED,
                payload: {
                    message,
                },
            });
        });
}


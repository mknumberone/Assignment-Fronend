/* eslint-disable default-case */
import * as type from "../const/ActionTypes";
const initialState = {
    list: {
        admin: [],
        loading: false
    },
    addAdmin: {
        loading: false,
        success: false,
        message: ""
    },
    getAdmin: {
        id: "",
        loading: false,
        success: false,
        message: "",
    },
    delAdmin: {
        id: "",
        loading: false,
        success: false,
        message: "",
    },
};

export default function adminReducers(state = initialState, action = {}) {
    // console.log("ACTION: ", action);
    switch (action.type) {
        case type.FETCH_USERS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: true,
                }
            }
        case type.FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    admin: action.payload.users
                }
            }
        case type.FETCH_USERS_FAILED:
            return {
                ...state,
                list: {
                    ...state.list,
                    loading: false,
                    admin: []
                }
            }
        case type.ADD_USER:
            return {
                ...state,
                addAdmin: {
                    ...state.addAdmin,
                    loading: true,
                    message: "",
                    success: false
                }
            }
        case type.ADD_USER_SUCCESS:
            // console.log(action.payload.data, 'payload')
            return {
                ...state,
                addAdmin: {
                    ...state.addAdmin,
                    loading: false,
                    message: action.payload.message,
                    success: true,
                },
                list:{
                    admin:[...state.list.admin, action.payload.data]
                }
            }
        case type.ADD_USER_FAILED:
            return {
                ...state,
                addAdmin: {
                    ...state.addAdmin,
                    loading: false,
                    message: action.payload.message,
                    success: false,
                }
            }
        case type.GET_USER:
            return {
                ...state,
                getAdmin: {
                    ...state.getAdmin,
                    loading: true,
                    success: false,
                    message: "",
                },
            };
        case type.GET_USER_SUCCESS:
            // console.log(action.payload.admin, 'payload')
            return {
                ...state,
                getAdmin: {
                    ...state.getAdmin,
                    loading: false,
                    message: "Get user success",
                    admin: action.payload.admin,
                    success: true,
                },
            };
        case type.GET_USER_FAILED:
            return {
                ...state,
                getAdmin: {
                    ...state.getAdmin,
                    loading: false,
                    message: "Get user failed",
                    success: false,
                },
            };
        case type.DELETE_USER:
            return{
                ...state,
                delAdmin:{
                    ...state.delAdmin,
                    loading:true
                }
        }
        case type.DELETE_USER_SUCCESS:
            // console.log(action.payload.data, 'payload')
            return {
                ...state,
                delAdmin: {
                    ...state.delAdmin,
                    loading:false,
                    message:action.payload.message,
                    success:true,
                },
                list: {
                    admin:state.list.admin.filter(x=>x._id !== action.payload.user)
                }
            }
        case type.DELETE_USER_FAILED:
            // console.log(action.payload.user, 'payload')
            return {
                ...state,
                delAdmin: {
                    ...state.delAdmin,
                    loading:false,
                    message:action.payload.message,
                    success:false
                }
            }
    }
    return state;
}

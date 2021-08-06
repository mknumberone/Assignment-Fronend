import * as actions from "../const/ActionTypes";

const departmentData = {
    departmentList: [],
    allDepartment: [],
    loading: false,
    loadingEmployee : false
}

export const departmentReducers = (state = departmentData, action) => {
    switch (action.type) {
        case actions.GET_DEPARTMENT:
            return {
                ...state,
                departmentList: [...action.payload]
            }
        case actions.GET_ALL_DEPARTMENT:
            return {
                ...state,
                allDepartment: [...action.payload]
            }
        case actions.POST_DEPARTMENT:
            return {
                ...state,
                departmentList: [...state.departmentList, action.payload]
            }
        case actions.UPDATE_DEPARTMENT:
            return {
                ...state,
                departmentList: state.departmentList.map(x => x.id === action.payload.id ? action.payload : x)
            }
        case actions.DELETE_DEPARTMENT:
            return {
                ...state,
                departmentList: state.departmentList.filter(x => x.id !== action.payload)
            }
        case actions.LOADING_TRUE:
            return {
                ...state,
                loading: true
            }
        case actions.LOADING_FALSE:
            return {
                ...state,
                loading: false
            }
        case actions.LOADING_EMPLOYEE_TRUE:
            return {
                ...state,
                loadingEmployee: true
            }
        case actions.LOADING_EMPLOYEE_FALSE:
            return {
                ...state,
                loadingEmployee: false
            }
        default:
            return state;
    }
}
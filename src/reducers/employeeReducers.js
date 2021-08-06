import * as type from "../const/ActionTypes";

const employeeData = {
  employeeList: [],
  loading: false,
};

export const employeeReducers = (state = employeeData, action) => {
  switch (action.type) {
    case type.GET_EMPLOYEE:
      return {
        ...state,
        employeeList: [...action.payload],
      };
    case type.POST_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, action.payload],
      };
    case type.UPDATE_EMPLOYEE:
      console.log(action.payload, "payload");
      return {
        ...state,
        employeeList: state.employeeList.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };
    case type.DELETE_EMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList.filter((x) => x._id !== action.payload),
      };
    case type.LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case type.LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

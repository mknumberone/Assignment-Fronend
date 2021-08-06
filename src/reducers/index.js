import { combineReducers } from 'redux'
import authReducer from './authReducers'
import adminReducers from './adminReducers'
import {departmentReducers} from './departmentReducers'
import { employeeReducers } from "./employeeReducers";

const reducers = combineReducers({
  auth: authReducer,
  admin: adminReducers,
  department: departmentReducers,
  employee: employeeReducers,
});

export default reducers;
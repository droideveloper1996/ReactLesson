import { combineReducers } from "redux";

import authReducer from "./authReducer";
import counterReducer from "./incrementReducer";

const allReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default allReducer;

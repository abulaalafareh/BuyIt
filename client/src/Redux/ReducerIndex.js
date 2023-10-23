import { combineReducers } from "redux";
import { userReducers } from "./UserReducers";

const reducers = combineReducers({
  userReducer: userReducers,
});

export default reducers;

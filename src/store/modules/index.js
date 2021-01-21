import { combineReducers } from "redux";
import setUserIdReducer from "./UpdateUserId";
import setPasswordReducer from "./UpdatePassword";

const rootReducer = combineReducers({
  setUserIdReducer,
  setPasswordReducer,
});

export default rootReducer;

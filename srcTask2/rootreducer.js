import { combineReducers } from "redux";

import Interval from "./reducers/interval";

let rootReducer = combineReducers({
  interval: Interval
});

export default rootReducer;

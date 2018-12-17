import { combineReducers } from "redux";

import allMessages from "./reducers/allmessages";

let rootReducer = combineReducers({
  messages: allMessages
});

export default rootReducer;

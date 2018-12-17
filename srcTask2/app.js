import React from "react";
import ReactDom from "react-dom";
import Main from "./main";
import rootReducer from "./rootreducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

let myStore = createStore(rootReducer);

ReactDom.render(
  <Provider store={myStore}>
    <Main />
  </Provider>,
  document.getElementById("list")
);

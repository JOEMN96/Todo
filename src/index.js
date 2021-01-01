import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./components/redux/reducer";
import { Provider } from "react-redux";

let initialState = {
  todos: [
    { todo: "buadkljy miladadk", id: 1 },
    { todo: "Qudadit adadada", id: 2 },
    { todo: "bdade nicdadae", id: 3 },
    { todo: "wodadaddrk hardadadd", id: 4 },
  ],
};

let store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

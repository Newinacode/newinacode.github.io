import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreProvider from "./utils/Store";
import { Provider } from "react-redux";
import AppState from "./reducers/AppState";
import { createStore } from "redux";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  AppState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <StoreProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </StoreProvider>
);

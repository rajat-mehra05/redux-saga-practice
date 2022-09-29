import createSagaMiddleware from "@redux-saga/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import App from "./App";
import "./index.css";
import myReducer from "./reducers/reducers";
import reportWebVitals from "./reportWebVitals";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ myReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

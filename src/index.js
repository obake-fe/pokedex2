import * as React from "react"
import ReactDOM from 'react-dom';
import './styles/reset.css';
import AppComponent from './js/components/AppComponent'
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './js/reducers/index';
import {Provider} from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagas from "./js/saga/sagas";

// Saga ミドルウェアを作成する
const sagaMiddleware = createSagaMiddleware();


// ストアを作る
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// Saga を起動する（NIJBOX_社員APIを使用する場合
// sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);
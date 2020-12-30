import React from 'react';
import { createStore, applyMiddleware, Store} from "redux"
import { Provider } from "react-redux"
import reducer from "./store/reducer"
import { render } from 'react-dom'
import thunk from "redux-thunk"
import App from './App';
import './index.css';

const store: Store<PostingState, PostingAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root")

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)

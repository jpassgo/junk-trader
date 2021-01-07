import React from 'react';
import { createStore, applyMiddleware, Store} from "redux"
import { Provider } from "react-redux"
import reducer from "./store/reducer"
import ReactDOM, { render } from 'react-dom'
import thunk from "redux-thunk"
import App from './App';
import './index.css';

const store: Store<PostingState, PostingAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root") 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// ServiceWorker.unregister()
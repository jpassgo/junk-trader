import React from 'react';
import { createStore, applyMiddleware, Store} from "redux"
import { Provider } from "react-redux"
import reducer from "./reducers/reducer"
import ReactDOM, { render } from 'react-dom'
import thunk from "redux-thunk"
import App from './App';
import './index.css';
import AddPostScreen from './components/AddPostScreen';
import PostsList from './components/PostsList';

const store: Store<PostState, PostAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root") 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <main>
          <h1>Marketplace</h1>
          <AddPostScreen/>
          <PostsList/>
      </main>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// ServiceWorker.unregister()
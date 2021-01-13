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
import { PostsScreen } from './components/PostsScreen';

const store: Store<PostState, PostAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root") 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  rootElement
);

// ServiceWorker.unregister()
import React from 'react';
import { Provider } from "react-redux"
import ReactDOM from 'react-dom'
import App from './App';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { createStore } from './config/redux/store';
import routes from './config/constants/routes';
import HomeScreen from './components/top-level-components/HomeScreen';
import AddPostScreen from './components/top-level-components/AddPostScreen';
import { init } from './creators/init';

const history = createHashHistory(),
  store = createStore(history);

// todo:  can delete this, just for demo purposes
store.dispatch(init('Redux Setup'));

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/*// todo:  this is the main "App" component, any component inside gets rendered as the App's "children"*/}
        <App>
          {/*// todo:  below <div /> tag with className={'route'} is important for the router*/}
          <div className={'route'}>
            <Route
              component={HomeScreen}
              exact
              path={routes.HOME_SCREEN}
            />
          </div>
          <div className={'route'}>
            <Route
              component={AddPostScreen}
              exact
              path={routes.ADD_POST_SCREEN}
            />
          </div>
        </App>
      </ConnectedRouter>
    </Provider>,
  document.getElementById("root") 
);

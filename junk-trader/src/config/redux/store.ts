import {
  Store,
  combineReducers,
  applyMiddleware,
  createStore as originalCreateStore,
} from 'redux';
import { History } from 'history';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import application, { ApplicationState } from '../../reducers/application';

export const createStore = (history: History): Store => {
  const createStoreFunc = applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history)
  )(originalCreateStore),
    allReducers = combineReducers({
      router: connectRouter(history),
      routing: routerReducer,
      applicationState: application.reducer,
      // todo:  able to add more reducers here
    });

  return createStoreFunc(allReducers, {
    applicationState: ({
      // todo:  this is where we can default values for the app on load
      testValue: 'DEFAULTING_FOR_TEST',
      posts: [
        {
            id: 1,
            title: "PS5",
            price: 1200.0,
            description: "Over priced second hand PS5."
        },
        {
            id: 2,
            title: "Xbox Series X",
            price: 500.0,
            description: "Not even upcharging, please take it off my hands."
        }
    ]
    } as unknown) as ApplicationState,
  });
};

export interface State {
  applicationState: ApplicationState;
}

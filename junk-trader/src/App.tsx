import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addPost, removePost } from "./store/actionCreators"
import { AddPostScreen } from "./components/AddPostScreen"
import { PostsScreen } from "./components/PostsScreen"
import { PostScreenProps } from "./components/PostsScreen"
import * as redux from 'redux'
import { Provider } from 'react-redux'
import * as React from "react"
import reducer from "./reducers/reducer"
import "./App.css"
import PostsList from "./components/PostsList"
import { withStyles, Theme } from "@material-ui/core"
import { Styles, StyledComponentProps, WithStyles } from "@material-ui/core/styles/withStyles"
import { Component } from "react"
import thunk from "redux-thunk"

const styles: Styles<Theme, StyledComponentProps> = () => ({})

const store: redux.Store<PostState, PostAction> & {
  dispatch: DispatchType
} = redux.createStore(reducer, redux.applyMiddleware(thunk))

class App extends Component<AppProps> {
  render(): JSX.Element {
    const {
      posts
    } = this.props;

    return (
      <Provider store={store}>
        <AddPostScreen posts={posts}/>
        <PostsList/>
      </Provider>
    );
  }
}

export interface AppProps extends WithStyles<typeof styles> {
  posts?: Post[];
}
export default App;

import { AddPostScreen } from "./components/AddPostScreen"
import * as React from "react"
import "./App.css"
import { Component } from "react"
import PostsList from "./components/PostsList"
import { Store, createStore, applyMiddleware } from "redux"
import reducer from "./reducers/reducer"
import thunk from "redux-thunk"
import { Provider, useSelector, shallowEqual, useDispatch } from "react-redux"
import { State } from "./store/store"
import { addPost } from "./store/actionCreators"
import { makeStyles, MuiThemeProvider, Theme, createMuiTheme } from "@material-ui/core/styles"

const store: Store<PostState, PostAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


function theme(): Theme {
  return createMuiTheme({

  })
}

const useStyles = makeStyles({
  root: {
    color: 'red',
    '& p': {
      color: 'green',
      '& span': {
        color: 'blue'
      }
    }
  }
});

export const App: React.FC = () => {

      // const posts: Post[] = useSelector(
      //   (state: State) => state.applicationState.posts,
      //   shallowEqual
      // )

      const classes = useStyles();

      const dispatch: React.Dispatch<any> = useDispatch()
  
      const savePost = React.useCallback(
          (post: Post) => dispatch(addPost(post)),
          [dispatch]
      )
      return (
        <MuiThemeProvider theme={theme()}>
            <AddPostScreen addPost={savePost} />
            <PostsList/>
        </MuiThemeProvider>
    );
  
}

export default App;
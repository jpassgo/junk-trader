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

const App: React.FC = () => {
  const posts: readonly Post[] = useSelector(
    (state: PostState) => state.posts,
    shallowEqual
  )

  const store = redux.createStore(reducer)

  return (
    <Provider store={store}>
      <main>
          <h1>Marketplace</h1>
          <AddPostScreen/>
          <PostsList/>
      </main>
    </Provider>
  )
}

export default App;

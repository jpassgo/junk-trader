import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addPosting, removePosting } from "./store/actionCreators"
import { AddPostingScreen } from "./components/AddPostingScreen"
import { PostingScreen } from "./components/PostingScreen"
// import createStore from './createReduxStore'
import { Provider } from 'react-redux'
import { Dispatch } from "redux"
import * as React from "react"
import "./App.css"

const App: React.FC = () => {
  const postings: readonly Posting[] = useSelector(
    (state: PostingState) => state.postings,
    shallowEqual
  )

  return (
    <Provider >
      <main>
          <h1>My Articles</h1>
          <AddPostingScreen/>
          {postings.map((posting: Posting) => (
              <PostingScreen
                  key={posting.id}
                  posting={posting}
                  removePosting={removePosting}
              />
          ))}
      </main>
    </Provider>
)
}

export default App;

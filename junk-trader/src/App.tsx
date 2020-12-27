import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { addPosting, removePosting } from "./store/actionCreators"
import { AddPostingScreen } from "./components/AddPostingScreen"
import { PostingScreen } from "./components/PostingScreen"
import * as redux from 'redux'
import { Provider } from 'react-redux'
import * as React from "react"
import reducer from "./store/reducer"
import "./App.css"

const App: React.FC = () => {
  const postings: readonly Posting[] = useSelector(
    (state: PostingState) => state.postings,
    shallowEqual
  )

  const store = redux.createStore(reducer)

  return (
    <Provider store={store}>
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

import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./App.css"

import { Posting } from "./components/Posting"
import { AddPostingScreen } from "./components/AddPostingScreen"
import { addPosting, removePosting } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const postings: readonly Posting[] = useSelector(
    (state: PostingState) => state.postings,
    shallowEqual
  )

  return (
    <main>
        <h1>My Articles</h1>
        <AddPostingScreen savePosting={savePosting} />
        {postings.map((posting: Posting) => (
            <Posting
                key={posting.id}
                posting={posting}
                removePosting={removePosting}
            />
        ))}
    </main>
)
}

export default App;

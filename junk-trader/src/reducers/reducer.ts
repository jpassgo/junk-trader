import actions from '../store/actions'

export default { 
    reducer(
        state: PostState = ({} as unknown) as PostState,
        action: PostAction
    ): PostState {
        let newState = Object.assign({}, state);
        switch(action.type) {
            case actions.ADD_POST:
                return {
                    ...newState,
                    posts: newState.posts.concat(action.post)
                }
            case actions.REMOVE_POST:
                const updatedPosts: Post[] = newState.posts.filter(
                    post => post.id !== action.post.id
                )
                return {
                    ...newState,
                    posts: updatedPosts
                }
        }
        
        return newState
    }
};
  
export interface PostState {
    posts: Post[]
}
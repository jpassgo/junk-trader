import actions from '../store/actions'

export function addPost(post: Post) {
    const action: PostAction = {
        type: actions.ADD_POST,
        post,
    }

    return simulateHttpRequest(action)
}

export function removePost(post: Post) {
    const action: PostAction = {
        type: actions.REMOVE_POST,
        post,
    }

    return simulateHttpRequest(action)
}

export function simulateHttpRequest(post: PostAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(post)
        }, 500)
    }
}
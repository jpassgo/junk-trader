import actions from '../store/actions'

export function addPosting(posting: Posting) {
    const action: PostingAction = {
        type: actions.ADD_POSTING,
        posting,
    }

    return simulateHttpRequest(action)
}

export function removePosting(posting: Posting) {
    const action: PostingAction = {
        type: actions.REMOVE_POSTING,
        posting,
    }

    return simulateHttpRequest(action)
}

export function simulateHttpRequest(posting: PostingAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(posting)
        }, 500)
    }
}
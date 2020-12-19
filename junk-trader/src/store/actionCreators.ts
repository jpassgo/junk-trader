import * as actionTypes from './actionTypes'

export function addPosting(posting: Posting) {
    const action: PostingAction = {
        type: actionTypes.ADD_POSTING,
        posting,
    }

    return simulateHttpRequest(action)
}

export function removePosting(posting: Posting) {
    const action: PostingAction = {
        type: actionTypes.REMOVE_POSTING,
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
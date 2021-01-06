import actions from '../store/actions'

const initialState: PostingState = {
    postings: [
        {
            id: 1,
            title: "PS5",
            price: 1200.0,
            description: "Over priced second hand PS5."
        },
        {
            id: 2,
            title: "Xbox Series X",
            price: 500.0,
            description: "Not even upcharging, please take it off my hands."
        }
    ]
}

const reducer = (
    state: PostingState = initialState,
    action: PostingAction
): PostingState => {
    switch(action.type) {
        case actions.ADD_POSTING:
            const newPosting: Posting = {
                id: getRandomInt(1, 1000000),
                title: this.props.title,
                price: this.props.price,
                description: this.props.description
            }
            return {
                ...state,
                postings: state.postings.concat(newPosting)
            }
        case actions.REMOVE_POSTING:
            const updatedPostings: Posting[] = state.postings.filter(
                posting => posting.id !== action.posting.id
            )
            return {
                ...state,
                postings: updatedPostings
            }
    }
    return state
}

export default reducer
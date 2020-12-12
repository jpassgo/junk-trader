import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux "

type Props = {
    posting: Posting
    removePosting: (posting: Posting) => void
}

export const Posting: React.FC<Props> = ({ posting, removePosting }) => {
    const dispatch: Dispatch<any> = useDispatch()

    const deletePosting = React.useCallback(
        (posting: Posting) => dispatch(removePosting(posting)),
        [dispatch, removePosting]
    )

    return(
        <div className="Posting">
            <div>
                <h3>{posting.title}</h3>
                <p>{posting.price}</p>
                <p>{posting.description}</p>
            </div>
        </div>
    )
}
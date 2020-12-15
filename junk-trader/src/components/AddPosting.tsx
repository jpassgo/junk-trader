import { Button } from '@material-ui/core'
import * as React from "react"


type Props = {
    savePosting: (posting: Posting | any) => void
}

export const AddPosting: React.FC<Props> = ({savePosting}) => {
    const [posting, setPosting] = React.useState<Posting | {}>()

    const handlePostingData = (e: React.FormEvent<HTMLInputElement>) => {
        setPosting({
            ...posting,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewPosting = (e: React.FormEvent) => {
        e.preventDefault()
        savePosting(posting)
    }

    return(
        <form onSubmit={addNewPosting} className="Add-posting">
            <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={handlePostingData}
            />
             <input
                type="text"
                id="price"
                placeholder="Price"
                onChange={handlePostingData}
            />
            <input
                type="text"
                id="description"
                placeholder="Description"
                onChange={handlePostingData}
            />
            <Button color="primary" disabled={posting === undefined ? true : false}>
                Add Posting
            </Button>
        </form>
    )
}
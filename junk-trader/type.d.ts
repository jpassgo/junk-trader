interface Posting {
    id: number,
    title: string,
    price: number,
    description: number
}

type PostingState = {
    postings: Posting[]
}

type PostingAction = {
    type: string,
    posting: Posting
}

type DispatchType = (args: PostingAction) => PostingAction
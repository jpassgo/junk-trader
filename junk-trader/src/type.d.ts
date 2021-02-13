interface Post {
    id: number,
    title: string,
    price: string,
    description: string
}

type PostAction = {
    type: string,
    post: Post
}

type DispatchType = (args: PostAction) => PostAction
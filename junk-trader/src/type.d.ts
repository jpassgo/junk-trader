interface Post {
    id: number,
    title: string,
    price: string,
    description: string
}

type PostState = {
    posts: Post[]
}

type PostAction = {
    type: string,
    post: Post
}

type DispatchType = (args: PostAction) => PostAction
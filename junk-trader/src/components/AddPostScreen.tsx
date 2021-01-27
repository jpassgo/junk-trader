import React from 'react';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { Theme, WithStyles, withStyles } from '@material-ui/core'

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({});  

export const AddPostScreen: React.FC<AddPostScreenProps> = ({addPost}) =>  {

    const [post, setPost] = React.useState<Post | {}>()

    const handleAddingPost = (e: React.FormEvent<HTMLInputElement>) => {
        setPost({
            ...post,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewPost = (e: React.FormEvent) => {
        e.preventDefault()
        addPost(post)
    }

    return (
        <React.Fragment>
            <form onSubmit={ addNewPost } className="form-inline">
                <label>
                    Title:
                    <input type="text" name="title" onChange={handleAddingPost}/>
                </label>
                <label>
                    Price:
                    <input type="number" name="price" onChange={handleAddingPost}/>
                </label>
                <label>
                    Description:
                    <input type="text" name="description" onChange={handleAddingPost}/>
                </label>
                <button type="submit" value="Submit" />
            </form>
        </React.Fragment>
    );
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export interface AddPostScreenProps extends WithStyles<typeof styles> {
    addPost: (post: Post | {} | undefined) => void;
}

export default withStyles(styles, { withTheme: true })(AddPostScreen);
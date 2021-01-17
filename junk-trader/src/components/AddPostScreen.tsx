import React from 'react';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { Theme, WithStyles, withStyles } from '@material-ui/core'

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({});  

export const AddPostScreen: React.FC<AddPostScreenProps> = props =>  {
    
    const { addPost } = props;

    const handleClick = () => {
        addPost({id: getRandomInt(1, 1000), title: "", price: 100.00, description: "" });
    };

    return (
        <form onSubmit={ handleClick } className="form-inline">
            <label>
                Title:
                <input type="text" name="title" />
            </label>
            <label>
                Price:
                <input type="text" name="price" />
            </label>
            <label>
                Description:
                <input type="text" name="description" />
            </label>
            <button type="submit" value="Submit" />
        </form>
    );
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export interface AddPostScreenProps extends WithStyles<typeof styles> {
    addPost: (post: Post) => void;
}

export default withStyles(styles, { withTheme: true })(AddPostScreen);
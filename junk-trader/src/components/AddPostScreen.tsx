import React from 'react';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { AnyAction } from 'redux';
import actions from '../store/actions';
import { State } from '../store/store';
import { connect } from 'react-redux';
import { WithStyles, Theme } from '@material-ui/core'
import { Dispatch } from 'redux'

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({});  


export class AddPostScreen extends React.Component<AddPostScreenProps> {

        render(): JSX.Element {

        const {
            posts,
            addPost
        } = this.props;

        const handleClick = () => {
            addPost({id: getRandomInt(1, 1000), title: "", price: 100.00, description: "" });
          };

        return (
            <React.Fragment>
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
            </React.Fragment>  
        );
    }
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export interface AddPostScreenProps extends WithStyles<typeof styles> {
    posts?: Post[];
    addPost: (post: Post) => void;
}

const addPostToMarketplace = (post: Post): AnyAction => {
    return {
        type: actions.ADD_POST,
        postToAdd: post
    }
}

const mapStateToProps = (state: State): AddPostScreenProps => {
    return ({
        posts: state.applicationState.posts
    } as unknown) as AddPostScreenProps;
}

const mapDispatchToProps = (dispatch: Dispatch): AddPostScreenProps => 
    (({
        addPost: (post: Post) => {
            dispatch(addPostToMarketplace(post));
        },
    } as unknown) as AddPostScreenProps);


export default connect(mapStateToProps, mapDispatchToProps)(AddPostScreen);
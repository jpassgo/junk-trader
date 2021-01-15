import React, { Component } from 'react';
import { Theme, WithStyles, withStyles } from '@material-ui/core';
import { Styles, StyledComponentProps } from '@material-ui/styles';
// import { AddPostScreenProps } from './AddPostScreenConnector';
import { ReactComponent } from '*.svg';
import { addPost } from '../store/actionCreators';

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({});  


export class AddPostScreen extends React.Component<AddPostScreenProps> {

    addPosting(e: any) {
        e.preventDefault();    
    }

    render(): JSX.Element {

        const {
            posts
        } = this.props;

        const handleClick = () => {
            addPost({
                post = {};
            });
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
}

export default withStyles(styles, {withTheme: true})(AddPostScreen)
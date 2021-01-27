import React, { Component } from 'react';
import { Card, Theme, WithStyles, withStyles, List, ListItem } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import { render } from '@testing-library/react';
import Grid from '@material-ui/core/Grid';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { ListItemText } from '@material-ui/core';


const styles: Styles<Theme, StyledComponentProps> = (theme) => ({})

export class PostsScreen extends Component<any>{
    render() {
        const {
            posts
        } = this.props

        const postsList = posts.map((post: Post) =>
            <ul>
                <li>{posts.title}</li>
                <li>{posts.price}</li>
                <li>{posts.description}</li>
            </ul>
        );
        debugger;

        return postsList;
    }
}

export interface PostScreenProps extends WithStyles<typeof styles> {
    posts: Post[];
}

export default withStyles(styles, {withTheme: true})(PostsScreen)
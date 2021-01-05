import React, { Component } from 'react';
import { Card, Theme, WithStyles, withStyles, List, ListItem } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import { render } from '@testing-library/react';
import Grid from '@material-ui/core/Grid';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { ListItemText } from '@material-ui/core';


const styles: Styles<Theme, StyledComponentProps> = (theme) => ({})

export class PostingScreen extends Component<any>{
    render(): JSX.Element {
        debugger;
        const postingsList = this.props.postings.map((posting: Posting) =>
            <ul>
                <li>{posting.title}</li>
                <li>{posting.price}</li>
                <li>{posting.description}</li>
            </ul>
        );
        debugger;
        return (
            postingsList
        )
    }
}

export type PostingScreenProps = WithStyles<typeof styles>

export default withStyles(styles, {withTheme: true})(PostingScreen)
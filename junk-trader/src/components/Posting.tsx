import React, { Component } from 'react';
import { Card, Theme, WithStyles, withStyles } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent'
import { render } from '@testing-library/react';
import Grid from '@material-ui/core/Grid';
import { Styles, StyledComponentProps } from '@material-ui/styles';

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({
    
})

export class Posting extends Component<any>{
    render(): JSX.Element {
        return (
            <Card>
                <CardContent>
                    <Grid container spacing={2} justify={'center'}>
                        <Grid item xs={10}>
                            <p>Title</p>
                            <p>Price</p>
                            <p>Description</p>    
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

export type PostingProps = WithStyles<typeof styles>

export default withStyles(styles, {withTheme: true})(Posting)
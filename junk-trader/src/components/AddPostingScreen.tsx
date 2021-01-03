import React, { Component } from 'react';
import { Theme, WithStyles, withStyles } from '@material-ui/core';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({
    
})  


export class AddPostingScreen extends Component<any>{

    addPosting(posting: Posting): void {
        this.props.addPosting(posting)
    }

    render(): JSX.Element {
        debugger;

        return (
           <Grid container spacing={3}>
               <Grid item xs={12}>
                   <TextField id="title" label="Title" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
                   <TextField id="price" label="Price" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
                   <TextField id="description" label="Description" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
                   <Button variant="outlined" onClick={() => { this.addPosting.bind({
                       id: getRandomInt(1, 1000000),
                       title: this.props.title,
                       price: this.props.price,
                       description: this.props.description
                   }) }}>Submit</Button>
               </Grid>
           </Grid>
        )
    }
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

export type AddPostingScreenProps = WithStyles<typeof styles>

export default withStyles(styles, {withTheme: true})(AddPostingScreen)
import React, { Component } from 'react';
import { Theme, WithStyles, withStyles } from '@material-ui/core';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({
    
})

export class AddPostingScreen extends Component<any>{
    render(): JSX.Element {
        return (
           <Grid container spacing={3}>
               <Grid item xs={12}>
                   <TextField id="outlined-basic" label="Title" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
                   <TextField id="outlined-basic" label="Price" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
                   <TextField id="outlined-basic" label="Description" variant="outlined" />
               </Grid>
               <Grid item xs={12}>
                   <Button variant="outlined" onClick={}>Submit</Button>
               </Grid>
           </Grid>
        )
    }
}

export type AddPostingScreenProps = WithStyles<typeof styles>

export default withStyles(styles, {withTheme: true})(AddPostingScreen)
import React, { Component } from 'react';
import { Theme, WithStyles, withStyles } from '@material-ui/core';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { PostScreenProps } from './PostsScreen';
import { AddPostScreenProps } from './AddPostScreenConnector';
import { ReactComponent } from '*.svg';

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({
    
})  


export class AddPostScreen extends React.Component<AddPostScreenProps>{

    addPost(event: any): void {
        console.log(event)
        this.addPost(this.state);
    }

    constructor(props: AddPostScreenProps | Readonly<AddPostScreenProps>) {
        super(props);
        const {
            posts
        } = props

        this.state = posts.concat({
            id: getRandomInt(1,100),
            title: '',
            price: 0,
            description: ''
        })

        this.handleChange = this.handleChange.bind(this);
        this.addPost = this.addPost.bind(this);
      }
    
      handleChange = (event: { target: { name: any; value: any; }; }) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    render() {
        debugger;

        return (
            <form onSubmit={this.addPost}>
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
                <input type="submit" value="Submit" />
            </form>
        //    <Grid container spacing={3}>
        //        <Grid item xs={12}>
        //            <TextField id="title" label="Title" variant="outlined" />
        //        </Grid>
        //        <Grid item xs={12}>
        //            <TextField id="price" label="Price" variant="outlined" />
        //        </Grid>
        //        <Grid item xs={12}>
        //            <TextField id="description" label="Description" variant="outlined" />
        //        </Grid>
        //        <Grid item xs={12}>
        //            <Button variant="outlined" onClick={() => { this.addPost.bind(this) } }>Submit</Button>
        //        </Grid>
        //    </Grid>
        );
    }
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export default withStyles(styles, {withTheme: true})(AddPostScreen)
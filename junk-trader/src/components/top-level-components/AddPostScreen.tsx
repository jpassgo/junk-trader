import React, { useState, useEffect } from 'react';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { Theme, WithStyles, withStyles, Grid, CssBaseline, Paper, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Box, makeStyles, createStyles } from '@material-ui/core'
import { addPost } from '../../store/actionCreators';
import { useDispatch } from 'react-redux';

const styles: Styles<Theme, StyledComponentProps> = (theme) => ({});  

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      // todo:  using the "theme" for colors
      background: theme.palette.primary.main,
    },
    media: {
      minHeight: '20vh',
      background: theme.palette.secondary.main,
    },
  })
);

const AddPostScreen = (
    props: AddPostScreenProps
  ): JSX.Element => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        console.log(`Title: ${title}, Price: ${price}, Description: ${description}`);

        dispatch(addPost({ id: getRandomInt(1, 100), title: title, price: price, description: description }));
        
    }, [title, price, description]);

    return (    
      <form noValidate style={{ display: "flex", flexDirection: "column" }}>
          <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='title'
          label='Title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          name='title'
          autoComplete='title'
          autoFocus
          />
          <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='price'
          label='Price'
          value={price}
          onChange={e => setPrice(e.target.value)}                
          id='price'
          autoComplete='$0.00'
          />
          <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='description'
          label='Description'
          value={description}
          onChange={e => setDescription(e.target.value)}                
          id='description'
          autoComplete='Place a description of the item here.'
          />
          <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          value='Add Post'                  
          onClick={() => {}}
          >
          Add Post
          </Button>                  
      </form>                                         
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
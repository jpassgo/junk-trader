import React, { Component, useState } from 'react';
import { Styles, StyledComponentProps } from '@material-ui/styles';
import { Theme, WithStyles, withStyles, Grid, CssBaseline, Paper, Typography, TextField, FormControlLabel, Checkbox, Button, Link, Box, makeStyles, createStyles } from '@material-ui/core'
import { addPost } from '../../store/actionCreators';
import classes from '*.module.css';

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

class AddPostScreen extends Component<AddPostScreenProps> {
    render(): JSX.Element {
        const classes = useStyles();
        const [inputs, setInputs] = useState({
            title: '',
            price: '',
            description: ''
        });

        function handleChange(e) {
            e.preventDefault();
            const { name, value } = e.target;
            setInputs({ ...inputs, [name]: value });
            console.log(`${inputs}`)
        }

        const addPost = () => {
            addPost({ inputs });
            console.log(`post; ${post}`)
        };

        return (
            <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Typography component='h1' variant='h5'>
                    Add Post
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='title'
                    label='Title'
                    value={inputs.title}
                    onChange={e => handleChange(e)}
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
                    value={inputs.price}
                    onChange={e => handleChange(e)}
                    type='number'
                    id='price'
                    autoComplete='$0.00'
                    />
                    <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                    />
                    <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='description'
                    label='Description'
                    value={inputs.description}
                    onChange={e => handleChange(e)}
                    type='text'
                    id='description'
                    autoComplete='Place a description of the item here.'
                    />
                    <FormControlLabel
                    control={<Checkbox value='remember' color='primary' />}
                    label='Remember me'
                    />
                    <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    value='Add Post'
                    className={classes.submit}
                    onClick={() => addPost()}
                    >
                    Sign In 🙂
                    </Button>
                    <Grid container>                
                    <Grid item>
                        <Link
                        variant='body2'
                        onClick={() => history.push('/search')}
                        >
                        {""}
                        </Link>
                    </Grid>
                    </Grid>            
                </form>
                </div>
            </Grid>
            </Grid>
        );
    }
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
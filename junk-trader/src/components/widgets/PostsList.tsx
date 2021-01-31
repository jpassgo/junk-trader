import { connect } from 'react-redux';
import React from 'react';
import { Dispatch } from 'redux';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, makeStyles, Theme, createStyles } from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { State } from '../../config/redux/store';

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

const PostsList = (props: PostsListProps): JSX.Element => {

        const classes = useStyles();

        return( 
        <React.Fragment>
            {props.posts.map((post: Post, index: number) => (

                <Card>
                    <CardHeader
                        title={'Card Header'}
                        subheader={'with some subheader'}
                        avatar={
                            <Avatar className={classes.avatar}>
                                <SportsEsportsIcon />
                            </Avatar>
                        }
                    />
                    <CardMedia
                        className={classes.media}
                        title={'Some Card content title for on hover'}
                    />
                    <CardContent>
                        <Typography>
                            {`Title ${post.title}`}
                        </Typography>
                        <Typography>
                            {`Price ${post.price}`}
                        </Typography>
                        <Typography>
                            {`Description ${post.description}`}
                        </Typography>
                    </CardContent>
                </Card>            
            ))}
        </React.Fragment>
    );
};

export interface PostsListProps {
    posts: Post[]
}

const mapStateToProps = (state: State): PostsListProps => {
    return ({
        posts: state.applicationState.posts
    } as unknown) as PostsListProps;
};

const mapDispatchToProps = (dispatch: Dispatch): PostsListProps => {
    return (({} as unknown) as PostsListProps);
  }
    
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
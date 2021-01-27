import { connect } from 'react-redux';
import React from 'react';
import { Grid } from '@material-ui/core';
import { Dispatch } from 'redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


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
        return( 
        <React.Fragment>
            {props.posts.map((post: Post, index: number) => (
                <Grid container>
                    <Grid item xs={4}>
                        {`Title ${post.title}`}
                    </Grid>
                    <br/>
                    <Grid item xs={4}>
                        {`Price ${post.price}`}
                    </Grid>
                    <br/>
                    <Grid item xs={4}>
                        {`Description ${post.description}`}
                    </Grid>
                </Grid>
            ))}
        </React.Fragment>
    );
};

export interface PostsListProps {
    posts: Post[]
}

const mapStateToProps = (state: PostState): PostsListProps => {
    return ({
        posts: state.posts
    } as unknown) as PostsListProps;
};

const mapDispatchToProps = (
    dispatch: Dispatch
): PostsListProps => ({} as unknown) as PostsListProps);
    
export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
import { connect } from 'react-redux';
import React from 'react';
import { ListItem, List, Grid } from '@material-ui/core';

const PostsList = (props: PostsListProps) => {
    const {
        posts
    } = props;
    
    return( 
        <React.Fragment>
            {posts.map((post: Post, index: number) => (
                <Grid container>
                    <Grid item xs={6}>
                        {`Title ${post.title}`}
                    </Grid>
                    <br/>
                    <Grid item xs={6}>
                        {`Price ${post.price}`}
                    </Grid>
                    <br/>
                    <Grid item xs={6}>
                        {`Description ${post.description}`}
                    </Grid>
                </Grid>
            ))}
        </React.Fragment>
    );
};

interface PostsListProps {
    posts: Post[];
}

const mapStateToProps = (state: PostState): PostsListProps => {
    return ({
        posts: state.posts
    } as unknown) as PostsListProps;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
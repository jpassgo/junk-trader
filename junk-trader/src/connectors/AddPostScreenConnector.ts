import actions from '../store/actions'
import { AnyAction, Dispatch } from 'redux'
import { State } from '../config/redux/store'
import { AddPostScreenProps } from '../components/top-level-components/AddPostScreen'


const addPostToMarketplace = (post: Post): AnyAction => {
    return {
        type: actions.ADD_POST,
        postToAdd: post
    }
}

const mapStateToProps = (state: State): AddPostScreenProps => {
    return ({
        posts: state.applicationState.posts
    } as unknown) as AddPostScreenProps;
}

const mapDispatchToProps = (dispatch: Dispatch): AddPostScreenProps => 
    (({
        addPost: (post: Post) => {
            dispatch(addPostToMarketplace(post));
        },
    } as unknown) as AddPostScreenProps);

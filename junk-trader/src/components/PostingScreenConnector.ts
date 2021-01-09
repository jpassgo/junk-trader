import { connect } from 'react-redux'
import PostingScreen, {
    PostScreenProps
} from './PostsScreen'
import { State } from '../store/store';

const mapStateToProps = (state: State): PostScreenProps => {
    return ({
        posts: state.applicationState.posts
    } as unknown) as PostScreenProps;
};

const mapDispatchToProps = (): PostScreenProps => {
    return (({} as unknown) as PostScreenProps);
}


export default connect(mapStateToProps, mapDispatchToProps)(PostingScreen);
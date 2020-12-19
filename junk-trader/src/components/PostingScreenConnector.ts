import { connect } from 'react-redux'
import PostingScreen, {
    PostingScreenProps
} from './PostingScreen'

const mapStateToProps = (): PostingScreenProps => {
    return ({} as unknown) as PostingScreenProps;
};

const mapDispatchToProps = (): PostingScreenProps => {
    return (({} as unknown) as PostingScreenProps);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostingScreen);
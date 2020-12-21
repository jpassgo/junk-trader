import { connect } from 'react-redux'
import AddPostingScreen, {
    AddPostingScreenProps
} from './AddPostingScreen'

const mapStateToProps = (): AddPostingScreenProps => {
    return ({} as unknown) as AddPostingScreenProps;
}

const mapDispatchToProps = (): AddPostingScreenProps => {
    return (({} as unknown) as AddPostingScreenProps);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostingScreen);
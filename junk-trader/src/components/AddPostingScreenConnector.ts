import { AccordionActions } from '@material-ui/core'
import actions from '../store/actions'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import AddPostingScreen, {
    AddPostingScreenProps
} from './AddPostingScreen'


const addPostingToMarketplace = (posting: Posting): AnyAction => {
    return {
        type: actions.ADD_POSTING,
        postingToAdd: posting
    }
}

const mapStateToProps = (state: { postings: { classes: Record<string, string> } }): AddPostingScreenProps => {
    return state.postings;
}

const mapDispatchToProps = (dispatch: Dispatch): AddPostingScreenProps => 
    (({
        addPosting: (posting: Posting) => {
            dispatch(addPostingToMarketplace(posting));
        },
    } as unknown) as AddPostingScreenProps);

export default connect(mapStateToProps, mapDispatchToProps)(AddPostingScreen);
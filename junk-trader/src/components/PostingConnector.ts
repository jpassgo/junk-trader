import { connect } from 'react-redux'
import Posting, {
    PostingProps
} from './Posting'

const mapStateToProps = (): PostingProps => {
    return ({} as unknown) as PostingProps;
};

const mapDispatchToProps = (): PostingProps => {
    return (({} as unknown) as PostingProps);

export default connect(mapStateToProps, mapDispatchToProps)(Posting);
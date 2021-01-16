import { connect } from 'react-redux'
import { State } from './store/store';
import App, { AppProps } from './App';

const mapStateToProps = (state: State): AppProps => {
    return ({
        posts: state.applicationState.posts
    } as unknown) as AppProps;
};

const mapDispatchToProps = (): AppProps => {
    return (({} as unknown) as AppProps);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
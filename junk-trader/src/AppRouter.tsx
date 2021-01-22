import {
    Theme,
    WithStyles,
    withStyles,
    StyledComponentProps,
} from '@material-ui/core/styles'
import React, { Component } from 'react';
// import { History } from 'history';
import { Styles } from '@material-ui/styles';
//import { ConnectedAppShell } from './ConnectedAppShell';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import routes from "./config/constants/routes";
import { PostingScreen } from "./components/PostingScreen";


const styles: Styles<Theme, StylesComponentProps> = () => ({});

class AppRouter extends Component<AppRouterProps> {
    render(): JSX.Element {
        const { browserHistory } = this.props;

        return (
            <ConnectedRouter>
                <Switch>
                    <Route
                        exact
                        component={PostingScreen}
                        path={routes.MY_POSTINGS_SCREEN}
                    />
                </Switch>
            </ConnectedRouter>
        )
    }
}
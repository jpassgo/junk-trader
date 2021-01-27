import {
  Theme,
  WithStyles,
  withStyles,
  StyledComponentProps,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Styles } from '@material-ui/styles';
import { getLightTheme } from './config/theme/light-theme';

const styles: Styles<Theme, StyledComponentProps> = () => ({});

class App extends Component<AppProps> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={getLightTheme()}>
        <div>
          {/*// todo:  this is the "entry point" for the app. any "top" level */}
          {/*// todo:  component setup in the index file gets rendered here*/}
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export interface AppProps extends WithStyles<typeof styles> {
  children: JSX.Element;
}

export default withStyles(styles, { withTheme: true })(App);

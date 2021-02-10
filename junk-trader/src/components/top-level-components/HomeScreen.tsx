import React, { Component } from 'react';
import { Styles } from '@material-ui/styles';
import {
  StyledComponentProps,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import PostsList from '../widgets/PostsList';
import MenuLinks from '../widgets/MenuLinks';

const styles: Styles<Theme, StyledComponentProps> = () => ({});

class HomeScreen extends Component<HomeScreenProps> {
  render(): JSX.Element {
    const { classes } = this.props;

    return (
      <Grid container alignItems={'flex-start'} justify={'flex-start'}>
        {/* <Grid item xs={4}>
          <SomeCard />
        </Grid> */}
        <Grid item xs={4}>        
          <MenuLinks></MenuLinks>
          <PostsList />          
        </Grid>
      </Grid>
    );
  }
}

export type HomeScreenProps = WithStyles<typeof styles>;

export default withStyles(styles, { withTheme: true })(HomeScreen);

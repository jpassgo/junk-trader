import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { State } from '../../config/redux/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      // todo:  using the "theme" for colors
      background: theme.palette.primary.main,
    },
    media: {
      minHeight: '20vh',
      background: theme.palette.secondary.main,
    },
  })
);

const SomeCard = (
  props: SomeCardProps
): JSX.Element => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={'Card Header'}
        subheader={'with some subheader'}
        avatar={
          <Avatar className={classes.avatar}>
            <SportsEsportsIcon />
          </Avatar>
        }
      />
      <CardMedia
        className={classes.media}
        title={'Some Card content title for on hover'}
      />
      <CardContent>
        <Typography>
          {`Username From Redux: ${props.username}`}
        </Typography>

        <Typography>
          {`testValue from store: ${props.testValue}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export interface SomeCardProps {
  username: string;
  testValue: string;
}

const mapStateToProps = (state: State): SomeCardProps => {
  return ({
    testValue: state.applicationState.testValue,
    username: state.applicationState.username,
  } as unknown) as SomeCardProps;
};

const mapDispatchToProps = (
  dispatch: Dispatch
): SomeCardProps =>
  (({} as unknown) as SomeCardProps);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SomeCard);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import pic from './profilepic.jpg';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160
  }
});

export default function ImageAvatars () {
  const classes = useStyles();

  return (
    <Grid container justify='center' alignItems='center'>
      <Avatar alt='Heindrick Cheung' src={pic} className={classes.bigAvatar} />
    </Grid>
  );
}

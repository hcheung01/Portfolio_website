import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: '5%',
    background: '#292929',
    color: '#3F51B5'
  },
  font: {
    color: 'white',
    padding: '5px'
  }
}));

export default function PaperSheet () {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>GET  /api/myinfo</b>
        </Typography>
        <Typography component='p'>
          <em>Retrieve my profile information directly in JSON format instead of resume download</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>GET /api/allinfo</b>
        </Typography>
        <Typography component='p'>
          <em>Retrieve all posted information</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>POST /api/allinfo</b>
        </Typography>
        <Typography component='p'>
          <em>Send your information and messages in JSON to my database, I will contact you ASAP! POST request properties includes: name, title, company, email, phone, note</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>GET /api/allinfo/info/id</b>
        </Typography>
        <Typography component='p'>
          <em>Retrieve existing info by id</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>PUT /api/allinfo/info/id</b>
        </Typography>
        <Typography component='p'>
          <em>Update existing info by id</em>
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5' component='h3' className={classes.font}>
          <b>DELETE /api/allinfo/info/id</b>
        </Typography>
        <Typography component='p'>
          <em>Delete post by id</em>
        </Typography>
      </Paper>
    </div>
  );
}

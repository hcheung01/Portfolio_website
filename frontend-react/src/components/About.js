import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: '#292929',
    padding: theme.spacing(2),
    // color: '#3F51B5',
    textAlign: 'center'
    // padding: theme.spacing(3, 2)

  },
  paper: {
    padding: theme.spacing(3, 2),
    marginTop: '2%',
    color: '#3F51B5',
    backgroundColor: '#292929'
  }
}));

function About () {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth='md'>
        <Box>
          <Paper className={classes.paper}>
            <Typography variant='h4' component='h3'>
              About Me
            </Typography>
            <Typography component='p'>
              <br />
              Hello, welcome to my portfolio! I'm Heindrick, an employable
              Software Engineer who recently completed a projects based 9 months
              Full Stack curriculum at Holberton School in San Francisco.
              After completion, I continued learning by building interesting and
              meaningful projects. This Full-stack portfolio
              is designed using React.js + Material-UI for the frontend and Python + Flask + SQLAlchemy + MySQL for the RESTful backend.
              Please explore the different pages here, especially the API documentation page!
            </Typography>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default About;

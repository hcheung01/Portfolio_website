import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
      <ScrollAnimation duration={4} animateIn='fadeIn'>
        <Container className={classes.root} maxWidth='md'>
          <Box>
            <Paper className={classes.paper}>
              <Typography variant='h4' component='h3'>
                About Me
              </Typography>
              <Typography component='p'>
                <br />
                Hello, welcome to my site! I'm Heindrick, a software engineer
                who recently completed a formal education on 9 months of
                projects based Full Stack curriculum at Holberton School in
                San Francisco. My passion in programming is building web
                applications, analyzing and processing data. After completion,
                I continued learning by building interesting and meaningful
                projects. Please explore the different pages here, especially
                the API documentation page! I will continue building fun component projects to integrate with this site. Please come back to play with the new features!!! <br />
                <br />
                This site designed with:
                <br />
                React.js | Material-UI | Javascript | Python3 | Flask | SQLAlchemy | MySQL | Devicons
              </Typography>
            </Paper>
          </Box>
        </Container>
      </ScrollAnimation>
    </React.Fragment>
  );
}
export default About;
